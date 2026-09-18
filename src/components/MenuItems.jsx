import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { X, UserCircle2 } from "lucide-react";

const MenuItems = ({ isOpen, onClose }) => {
  const { isAuthenticated, logout } = useAuth();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="absolute right-0 top-0 h-full w-72 bg-white p-5 flex flex-col justify-between">
        <div className="flex flex-col gap-8 mt-20">
          <button
            onClick={onClose}
            className="mb-5 text-2xl text-red-900 bg-red-100 p-2 rounded-md hover:bg-red-200 cursor-pointer w-fit"
          >
            <X size={20} />
          </button>
          <div className="flex flex-col gap-4">
            <div>
              <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "hover:font-semibold"
                }
              >
                Home
              </NavLink>
              <div className="w-full h-[0.5px] bg-emerald-200 mt-4"></div>
            </div>
            <div>
              <NavLink
                to="/books"
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "hover:font-semibold"
                }
              >
                Books
              </NavLink>
              <div className="w-full h-[0.5px] bg-emerald-200 mt-4"></div>
            </div>
            <div>
              <NavLink
                to="/About"
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? "font-bold" : "hover:font-semibold"
                }
              >
                About
              </NavLink>
              <div className="w-full h-[0.5px] bg-emerald-200 mt-4"></div>
            </div>
            {isAuthenticated ? (
              <div>
                <NavLink
                  to="/dashboard"
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "hover:font-semibold"
                  }
                >
                  Dashboard
                </NavLink>
                <div className="w-full h-[0.5px] bg-emerald-200 mt-4"></div>
              </div>
            ) : (
              <>
                <div>
                  <NavLink
                    to="/login"
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "hover:font-semibold"
                    }
                  >
                    Login
                  </NavLink>
                  <div className="w-full h-[0.5px] bg-emerald-200 mt-4"></div>
                </div>
                <div>
                  <NavLink
                    to="/signup"
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive ? "font-bold" : "hover:font-semibold"
                    }
                  >
                    Signup
                  </NavLink>
                  <div className="w-full h-[0.5px] bg-emerald-200 mt-4"></div>
                </div>
              </>
            )}
          </div>
        </div>
        {isAuthenticated ? (
          <div className="mb-16">
            <button className="flex gap-3 font-semibold text-red-400/80" onClick={logout}>
              <UserCircle2 />
              Logout
            </button>
            <div className="w-full h-[0.5px] bg-emerald-200 mt-4"></div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MenuItems;
