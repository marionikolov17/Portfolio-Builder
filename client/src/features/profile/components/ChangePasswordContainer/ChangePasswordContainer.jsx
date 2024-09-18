import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ChangePasswordContainer() {
  const [isShownPassword, setIsShownPassword] = useState(false);
  const [isShownNewPassword, setIsShownNewPassword] = useState(false);

  return (
    <>
      <div className="w-96 h-max bg-white rounded-lg shadow p-4">
        <h4 className="font-bold">Change Password</h4>
        <form className="w-full flex flex-col">
          {/* Old Password */}
          <div className="mt-4 w-full">
            <div className="flex items-center">
              <div className="flex justify-start grow">
                <label htmlFor="password" className="text-sm font-bold">
                  Old Password
                </label>
              </div>
              <div className="flex justify-end grow">
                <Link className="text-sm font-medium text-primaryBlue">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="flex w-full items-center bg-white border rounded-lg overflow-hidden mt-1 transition duration-300 hover:ring-2 hover:ring-primaryBlue">
              <input
                type={isShownPassword ? "text" : "password"}
                id="password"
                required
                placeholder="Password..."
                className="py-2 px-4 grow outline-none bg-transparent"
              />
              {!isShownPassword && (
                <IoMdEye
                  className="mx-3 text-xl cursor-pointer"
                  onClick={() => setIsShownPassword(true)}
                />
              )}
              {isShownPassword && (
                <IoMdEyeOff
                  className="mx-3 text-xl cursor-pointer"
                  onClick={() => setIsShownPassword(false)}
                />
              )}
            </div>
          </div>
          {/* New Password */}
          <div className="mt-4 w-full">
            <label htmlFor="newPassword" className="text-sm font-bold">
              New Password
            </label>
            <div className="flex w-full items-center bg-white border rounded-lg overflow-hidden mt-1 transition duration-300 hover:ring-2 hover:ring-primaryBlue">
              <input
                type={isShownNewPassword ? "text" : "password"}
                id="newPassword"
                required
                placeholder="Password..."
                className="py-2 px-4 grow outline-none bg-transparent"
              />
              {!isShownNewPassword && (
                <IoMdEye
                  className="mx-3 text-xl cursor-pointer"
                  onClick={() => setIsShownNewPassword(true)}
                />
              )}
              {isShownNewPassword && (
                <IoMdEyeOff
                  className="mx-3 text-xl cursor-pointer"
                  onClick={() => setIsShownNewPassword(false)}
                />
              )}
            </div>
          </div>
          <button className="mt-4 w-full py-2 flex justify-center text-sm bg-primaryBlue text-white rounded-lg shadow transition duration-300 hover:ring-1 hover:ring-primaryBlue">
            Save
          </button>
        </form>
      </div>
    </>
  );
}
