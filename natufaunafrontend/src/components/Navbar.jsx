import { Link, useLocation } from "react-router-dom";
import natufauna from "../assets/natufauna.webp";
import LoginIcon from "../icons/LoginIcon";
import LogoutIcon from "../icons/LogoutIcon";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { UserContext } from "../context/UserContext";
import { AdminContext } from "../context/AdminContext";
import { Tooltip } from "@material-tailwind/react";
import UserIcon from "../icons/UserIcon";
import toast from "react-hot-toast";

const Navbar = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const { session, setSession, setUser } = useContext(UserContext);
  const { adminSession, setAdminSession } = useContext(AdminContext);
  const location = useLocation();

  function logout() {
    if (session) {
      window.localStorage.removeItem("session");
      window.localStorage.removeItem("user");
      setSession(false);
      setUser(null);
      toast.success("Logout successfull!")
    } else {
      window.localStorage.removeItem("adminSession");
      setAdminSession(false);
      toast.success("Logout successfull!")
    }
  }

  const menuVariants = {
    closed: {
      scale: 0,
      y: -200,
      transition: {
        type: "linear",
        delay: 1.1,
        duration: 0.3,
      },
    },
    open: {
      scale: 1,
      y: 60,
      transition: {
        type: "linear",
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: (custom) => ({
      x: -25,
      opacity: 0,
      transition: {
        type: "spring",
        delay: custom * 0.2,
        duration: 0.2,
      },
    }),
    open: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: custom * 0.2,
        duration: 0.2,
      },
    }),
  };

  return (
    <nav className="flex flex-row bg-white z-10 w-[90%] mx-auto rounded-full border-b h-16 border-green-600/50 shadow-xl m-2 sticky top-2 opacity-95">
      <div className="flex flex-row justify-between w-[90%] mx-auto p-2">
        <div className="flex justify-center items-center z-10">
          <Link to="/">
            <img
              className="w-12 h-10 md:w-14 md:h-11"
              src={natufauna}
              alt="logoNatufauna"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="hidden md:flex bg-white min-h-fit w-auto items-center px-5">
          <ul className="flex flex-row w-full items-center md:items-center gap-8">
            <li>
              <Link
                to="/"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/" ? "text-green-700/90" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/adoptions"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/adoptions" ? "text-green-700/90" : ""
                }`}
              >
                Adoptions
              </Link>
            </li>
            <li>
              <Link
                to="/sponsorships"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/sponsorships"
                    ? "text-green-700/90"
                    : ""
                }`}
              >
                Sponsorships
              </Link>
            </li>
            <li>
              <Link
                to="/donations"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/donations" ? "text-green-700/90" : ""
                }`}
              >
                Donations
              </Link>
            </li>
          </ul>
        </div>
        <motion.div
          className="absolute bg-white min-h-[26vh] right-14 md:right-24 lg:right-28 w-[170px] flex items-center rounded-b-xl rounded-t-xl border border-green-600/50"
          initial="closed"
          animate={userMenu ? "open" : "closed"}
          variants={menuVariants}
        >
          <motion.ul className="flex flex-col w-full items-center gap-y-6 text-base">
            <motion.li
              initial="closed"
              animate={userMenu ? "open" : "closed"}
              variants={itemVariants}
              custom={2}
            >
              <Link
                to="/myAdoptions"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/myAdoptions"
                    ? "text-green-700/90"
                    : ""
                }`}
              >
                My Adoptions
              </Link>
            </motion.li>
            <motion.li
              initial="closed"
              animate={userMenu ? "open" : "closed"}
              variants={itemVariants}
              custom={3}
            >
              <Link
                to="/mySponsorships"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/mySponsorships"
                    ? "text-green-700/90"
                    : ""
                }`}
              >
                My Sponsorships
              </Link>
            </motion.li>
            <motion.li
              initial="closed"
              animate={userMenu ? "open" : "closed"}
              variants={itemVariants}
              custom={4}
            >
              <Link
                to="/myDonations"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/myDonations"
                    ? "text-green-700/90"
                    : ""
                }`}
              >
                My Donations
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div
          className="md:hidden absolute bg-white min-h-[32vh] left-0 w-full flex items-center rounded-b-xl rounded-t-xl border border-green-600/50"
          initial="closed"
          animate={changeIcon ? "open" : "closed"}
          variants={menuVariants}
        >
          <motion.ul className="flex flex-col w-full items-center gap-y-6 text-base">
            <motion.li
              initial="closed"
              animate={changeIcon ? "open" : "closed"}
              variants={itemVariants}
              custom={1}
            >
              <Link
                to="/"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/" ? "text-green-700/90" : ""
                }`}
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              initial="closed"
              animate={changeIcon ? "open" : "closed"}
              variants={itemVariants}
              custom={2}
            >
              <Link
                to="/adoptions"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/adoptions" ? "text-green-700/90" : ""
                }`}
              >
                Adoptions
              </Link>
            </motion.li>
            <motion.li
              initial="closed"
              animate={changeIcon ? "open" : "closed"}
              variants={itemVariants}
              custom={3}
            >
              <Link
                to="/sponsorships"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/sponsorships"
                    ? "text-green-700/90"
                    : ""
                }`}
              >
                Sponsorships
              </Link>
            </motion.li>
            <motion.li
              initial="closed"
              animate={changeIcon ? "open" : "closed"}
              variants={itemVariants}
              custom={4}
            >
              <Link
                to="/donations"
                className={`hover:text-green-700/90 ${
                  location.pathname === "/donations" ? "text-green-700/90" : ""
                }`}
              >
                Donations
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
        <div className="flex flex-row gap-4 justify-center items-center w-auto z-10">
          <Tooltip
            className="bg-green-400"
            content="Initial menu"
            placement="bottom"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <motion.button
              initial="hide"
              animate={changeIcon ? "show" : "hide"}
              onClick={() => setChangeIcon(!changeIcon)}
              className="md:hidden h-9 flex justify-center items-center flex-col space-y-1 relative z-10"
            >
              <motion.span
                variants={{
                  hide: {
                    rotate: 0,
                  },
                  show: {
                    rotate: 45,
                    y: 7,
                  },
                }}
                className="w-6 bg-green-600/80 h-[2px] block"
              ></motion.span>
              <motion.span
                variants={{
                  hide: {
                    opacity: 1,
                  },
                  show: {
                    opacity: 0,
                  },
                }}
                className="w-6 bg-green-600/80 h-[2px] block"
              ></motion.span>
              <motion.span
                variants={{
                  hide: {
                    rotate: 0,
                  },
                  show: {
                    rotate: -45,
                    y: -5,
                  },
                }}
                className="w-6 bg-green-600/80 h-[2px] block"
              ></motion.span>
            </motion.button>
          </Tooltip>
          {adminSession || session ? (
            <>
              {session ? (
                <>
                  <Tooltip
                    className="bg-green-400"
                    content="Menu user"
                    placement="bottom"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <button onClick={() => setUserMenu(!userMenu)}>
                      <UserIcon />
                    </button>
                  </Tooltip>
                  <Tooltip
                    className="bg-green-400"
                    content="Logout"
                    placement="bottom"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <Link to="/" onClick={() => logout()}>
                      <LogoutIcon />
                    </Link>
                  </Tooltip>
                </>
              ) : (
                <Tooltip
                  className="bg-green-400"
                  content="Logout"
                  placement="bottom"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <Link to="/" onClick={() => logout()}>
                    <LogoutIcon />
                  </Link>
                </Tooltip>
              )}
            </>
          ) : (
            <Tooltip
              className="bg-green-400"
              content="Login"
              placement="bottom"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <Link to="/login">
                <LoginIcon />
              </Link>
            </Tooltip>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
