import React from "react";
import { SignIn } from "@clerk/clerk-react";

function Signin() {
  return (
    <div className="flex justify-center items-center h-[90vh] bg-gradient-to-r from-gray-900 to-gray-800">
      <SignIn />
    </div>
  );
}

export default Signin;
