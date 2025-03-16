// Header.jsx
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../font.css";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useClerk, useUser } from "@clerk/clerk-react";
import { userAuthorContextObj } from "../../contexts/UserAuthorContext";
import { ThemeContext } from "../../contexts/ColorContext";

export default function Header() {
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, setCurrentUser } = useContext(userAuthorContextObj);
  const { isSignedIn, user, isLoaded } = useUser();
  const { isNightMode } = useContext(ThemeContext);

  const handleSignOut = async (e) => {
    await signOut();
    setCurrentUser(null);
    e.preventDefault();
    navigate("/");
  };

  return (
    <header
      className={`${
        isNightMode 
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white" 
          : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
      } w-full z-50 border-b border-gray-800/20 shadow-sm backdrop-blur-sm`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="p-1.5 w-auto group">
            <span className="sr-only">BlogNest</span>
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-indigo-300 transition-all duration-300">
                BlogNest
              </span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          <Link
            to="/"
            className="text-sm font-medium relative group px-4 py-2"
          >
            <span className="relative z-10 text-gray-300 hover:text-white transition-colors">Home</span>
            <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-blue-500/0 to-purple-500/0 group-hover:h-2 transition-all duration-300"></div>
            <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-purple-500/0 to-indigo-500/0 group-hover:h-4 transition-all duration-300 delay-75"></div>
            <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-indigo-500/0 to-blue-500/0 group-hover:h-6 transition-all duration-300 delay-150"></div>
          </Link>
          {!isSignedIn && (
            <>
              <Link
                to="/signup"
                className="text-sm font-medium relative group px-4 py-2"
              >
                <span className="relative z-10 text-gray-300 hover:text-white transition-colors">Sign Up</span>
                <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-blue-500/0 to-purple-500/0 group-hover:h-2 transition-all duration-300"></div>
                <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-purple-500/0 to-indigo-500/0 group-hover:h-4 transition-all duration-300 delay-75"></div>
                <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-indigo-500/0 to-blue-500/0 group-hover:h-6 transition-all duration-300 delay-150"></div>
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium relative group px-4 py-2"
              >
                <span className="relative z-10 text-gray-300 hover:text-white transition-colors">About Us</span>
                <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-blue-500/0 to-purple-500/0 group-hover:h-2 transition-all duration-300"></div>
                <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-purple-500/0 to-indigo-500/0 group-hover:h-4 transition-all duration-300 delay-75"></div>
                <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-indigo-500/0 to-blue-500/0 group-hover:h-6 transition-all duration-300 delay-150"></div>
              </Link>
            </>
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isSignedIn ? (
            <div className="flex items-center gap-6">
              <button
                onClick={handleSignOut}
                className="text-sm font-medium relative group px-4 py-2"
              >
                <span className="relative z-10 text-gray-300 hover:text-white transition-colors">Sign Out</span>
                <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-blue-500/0 to-purple-500/0 group-hover:h-2 transition-all duration-300"></div>
                <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-purple-500/0 to-indigo-500/0 group-hover:h-4 transition-all duration-300 delay-75"></div>
                <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-indigo-500/0 to-blue-500/0 group-hover:h-6 transition-all duration-300 delay-150"></div>
              </button>
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <img
                    src={currentUser.profileImageUrl}
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-gray-700 transition-transform group-hover:scale-105"
                    alt={currentUser.firstName}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-300">{currentUser.firstName}</p>
                  <p className="text-xs text-gray-500">{currentUser.role}</p>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/signin"
              className="text-sm font-medium relative group px-4 py-2"
            >
              <span className="relative z-10 text-gray-300 hover:text-white transition-colors">Log in <span aria-hidden="true">&rarr;</span></span>
              <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-blue-500/0 to-purple-500/0 group-hover:h-2 transition-all duration-300"></div>
              <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-purple-500/0 to-indigo-500/0 group-hover:h-4 transition-all duration-300 delay-75"></div>
              <div className="absolute top-full left-0 w-full h-0 bg-gradient-to-b from-indigo-500/0 to-blue-500/0 group-hover:h-6 transition-all duration-300 delay-150"></div>
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-indigo-300 transition-all duration-300">
                BlogNest
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-800">
              <div className="space-y-2 py-6">
                {isSignedIn && (
                  <div className="flex items-center gap-3 px-3 group">
                    <div className="relative">
                      <img
                        src={currentUser.profileImageUrl}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-700 transition-transform group-hover:scale-105"
                        alt={currentUser.firstName}
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">{currentUser.firstName}</p>
                      <p className="text-xs text-gray-500">{currentUser.role}</p>
                    </div>
                  </div>
                )}
                <Link
                  to="/"
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  Home
                </Link>
                {!isSignedIn && (
                  <>
                    <Link
                      to="/about"
                      className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/signup"
                      className="block rounded-lg px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
              <div className="py-6">
                {isSignedIn ? (
                  <button
                    onClick={handleSignOut}
                    className="block w-full rounded-lg px-3 py-2.5 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    to="/signin"
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
