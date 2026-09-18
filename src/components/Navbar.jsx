import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import MenuItems from "./MenuItems";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-10 py-4 bg-emerald-950 text-amber-300 sticky top-0 z-50 shadow-md">
        <NavLink to="/">
          <h1 className="font-bold text-3xl">LibNest</h1>
        </NavLink>

        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold border-b-2" : "hover:font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "font-semibold border-b-2" : "hover:font-semibold"
            }
          >
            Books
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-semibold border-b-2" : "hover:font-semibold"
            }
          >
            About
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "font-semibold border-b-2" : "hover:font-semibold"
                }
              >
                Dashboard
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "font-semibold border-b-2" : "hover:font-semibold"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "font-semibold border-b-2" : "hover:font-semibold"
                }
              >
                Signup
              </NavLink>
            </>
          )}
        </div>
        <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      {openMenu && (
        <MenuItems isOpen={openMenu} onClose={() => setOpenMenu(false)} />
      )}
    </>
  );
};

export default Navbar;
