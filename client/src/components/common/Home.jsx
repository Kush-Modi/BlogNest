import { useContext, useEffect, useState } from "react";
import { userAuthorContextObj } from "../../contexts/UserAuthorContext";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ColorContext";
import Loader from "../Loader";
import axios from "axios";

function Home() {
  const { currentUser, setCurrentUser } = useContext(userAuthorContextObj);
  const { isSignedIn, user, isLoaded } = useUser();
  const [active, setActive] = useState(true);
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isNightMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const onRoleChange = async (e) => {
    setIsLoading(true);
    setError("");
    const role = e.target.value;
    setSelectedRole(role);

    try {
      let res;
      const userData = { ...currentUser, role };

      switch (role) {
        case "author":
          res = await axios.post(
            "http://localhost:3000/author-api/author",
            userData
          );
          break;
        case "user":
          res = await axios.post(
            "http://localhost:3000/user-api/user",
            userData
          );
          break;
        case "admin":
          res = await axios.post(
            "http://localhost:3000/admin-api/admincreate",
            userData
          );
          break;
        default:
          setError("Invalid role selected");
          return;
      }

      const { message, details, payload } = res.data;

      if (message === role || message === "admin") {
        setCurrentUser({ ...currentUser, ...payload });
        localStorage.setItem("currentuser", JSON.stringify({ ...currentUser, ...payload }));
        setError("");
        // Navigate based on role
        switch (role) {
          case "admin":
            navigate(`/admin-profile/${currentUser.email}`);
            break;
          case "author":
            navigate(`/author-profile/${currentUser.email}`);
            break;
          case "user":
            navigate(`/user-profile/${currentUser.email}`);
            break;
          default:
            break;
        }
      } else if (message === "Invalid Role") {
        setError(
          details || "This email is already registered with a different role"
        );
        setSelectedRole("");
      }
    } catch (err) {
      setError("An error occurred while processing your request");
      console.error("Role selection error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?.email) {
      axios
        .get(`http://localhost:3000/admin-api/getuser/${currentUser.email}`)
        .then((res) => {
          if (res.status === 200) {
            setActive(res.data.payload.isActive);
          }
        })
        .catch(() => setActive(true));
    }
  }, [currentUser]);

  useEffect(() => {
    if (isSignedIn && user) {
      setCurrentUser({
        ...currentUser,
        firstName: user.firstName,
        lastName: user?.lastName || "",
        email: user.emailAddresses[0].emailAddress,
        profileImageUrl: user.imageUrl,
      });
    }
  }, [isLoaded]);

  if (!isLoaded || isLoading) {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <Loader/>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-900 to-gray-800">
      {isSignedIn ? (
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full text-center border border-gray-700">
          <img
            src={currentUser.profileImageUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-600"
          />
          <h1 className="text-2xl font-bold text-white">
            {currentUser.firstName} {currentUser.lastName}
          </h1>
          <p className="text-gray-300 mt-2">{currentUser.email}</p>

          {active ? (
            <div className="flex justify-center space-x-6 py-4">
              {["author", "user", "admin"].map((role) => (
                <div key={role} className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    id={role}
                    value={role}
                    className="hidden peer"
                    onChange={onRoleChange}
                  />
                  <label
                    htmlFor={role}
                    className="px-4 py-2 border border-gray-600 rounded-lg cursor-pointer bg-gray-700 text-gray-300 hover:bg-gray-600 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-500 transition-all"
                  >
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-400 text-[1.5rem]">
              Your account is inactive, please contact the admin
            </p>
          )}

          {error && <p className="text-red-400 text-center">{error}</p>}
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Welcome to BlogNest
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Your one-stop destination for amazing blog content
          </p>
          <div className="space-x-4">
            <button
              onClick={() => navigate("/signin")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
