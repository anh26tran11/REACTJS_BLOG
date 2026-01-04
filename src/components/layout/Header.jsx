import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  // const [user, setUser] = useState(() => {
  //   const savedUser = localStorage.getItem("user");
  //   return savedUser ? JSON.parse(savedUser) : null;
  // });
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsUserMenuOpen(false);
    navigate("/login");
  };

  return (
    <div className="xl:container mx-auto py-4 fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32">
        <Link to="/">
          <img
            className="logo max-w-12 cursor-pointer"
            alt="Vite logo"
            src={logo}
          />
        </Link>
        <div className="flex justify-end items-center gap-2">
          <Link to="/create-blog">
            <button className="bg-[#5044e5] rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all hover:bg-primary/90 h-9 px-4 py-2 text-white">
              <Plus className="text-white w-4 h-4" />
              Create Blog
            </button>
          </Link>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 has-[>svg]:px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-moon"
            >
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
            </svg>
          </button>
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="border-[#e5e5e5] border bg-background shadow-xs inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 has-[>svg]:px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            {isUserMenuOpen && (
              <div
                ref={menuRef}
                className="absolute border-[#e5e5e5] right-0 top-full mt-2 bg-white rounded-md border shadow-md min-w-48 w-fit p-2 z-50"
              >
                {user ? (
                  <div className="flex flex-col gap-1">
                    <Link
                      to="/my-posts"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="group flex items-center gap-2 cursor-pointer bg-[#5044e5] text-white rounded py-2 px-2 text-sm font-medium hover:bg-[#4036b5]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                        <rect x="9" y="3" width="6" height="4" rx="2" />
                        <path d="M9 14h6" />
                        <path d="M9 18h6" />
                      </svg>
                      My Posts
                    </Link>
                    {user?.user.role === "admin" && (
                      <Link
                        to="/user-management"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="group flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded py-2 px-2 text-sm text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 text-[#6b7280]"
                        >
                          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                        User Management
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="group flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded py-2 px-2 text-sm text-gray-700 w-full text-left"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-[#6b7280]"
                      >
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                      </svg>
                      Logout
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link
                      to="/login"
                      className="group flex items-center gap-2 cursor-pointer hover:bg-[#5044e5] hover:text-white rounded py-1.5 px-1.5"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-fingerprint w-4 h-4 text-[#6b7280] group-hover:text-white"
                      >
                        <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
                        <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
                        <path d="M12 11v2a14 14 0 0 0 2.5 8" />
                        <path d="M8 15a18 18 0 0 0 1.8 6" />
                        <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
                      </svg>
                      Login
                    </Link>
                    <Link
                      to="/sign-up"
                      className="group flex items-center gap-2 cursor-pointer hover:bg-[#5044e5] hover:text-white rounded py-1.5 px-1.5"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-user-plus w-4 h-4 text-[#6b7280] group-hover:text-white"
                      >
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M16 19h6" />
                        <path d="M19 16v6" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                      </svg>
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
