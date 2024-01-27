import { Link } from "react-router-dom";
import natufauna from "../assets/natufauna.webp";
import LoginIcon from "../icons/LoginIcon";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [changeIcon, setChangeIcon] = useState(false);

  const menuVariants = {
    closed: {
      scale: 0,
      y: -200,
      transition: {
        type:"linear",
        delay: 1.2,
        duration: 0.5
      },
    },
    open: {
      scale: 1,
      y: 58,
      transition: {
        type: "linear",
        duration: 0.4,
      },
    },
  };

  const itemVariants = {
    closed: (custom) => ({
      x: -25,
      opacity: 0,
      transition: {
        type: "spring",
        delay: custom * 0.3,
        duration: 0.4,
      },
    }),
    open: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: custom * 0.3,
        duration: 0.4,
      },
    }),
  };

  return (
    <nav className="flex flex-row bg-white z-10">
      <div className="flex flex-row justify-between bg-white w-[92%] m-auto p-2">
        <div className="flex justify-center w-28 z-10">
          <img className="w-16" src={natufauna} alt="logoNatufauna" />
        </div>
        <div className="hidden md:flex bg-white min-h-fit w-auto items-center px-5">
          <ul className="flex flex-row w-full items-center md:items-center gap-8">
            <li>
              <Link to="/" className="hover:text-green-700/80">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600/80">
                Adoptions
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600/80">
                Sponsorship
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-600/80">
                Donations
              </Link>
            </li>
          </ul>
        </div>
        <motion.div
          className="md:hidden absolute bg-white min-h-[27vh] left-0 w-full flex items-center"
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
              <Link to="/" className="hover:text-green-700/80">
                Home
              </Link>
            </motion.li>
            <motion.li
              initial="closed"
              animate={changeIcon ? "open" : "closed"}
              variants={itemVariants}
              custom={2}
            >
              <Link to="/" className="hover:text-green-700/80">
                Adoptions
              </Link>
            </motion.li>
            <motion.li
              initial="closed"
              animate={changeIcon ? "open" : "closed"}
              variants={itemVariants}
              custom={3}
            >
              <Link to="/" className="hover:text-green-700/80">
                Sponsorship
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
        <div className="flex flex-row gap-4 justify-center items-center w-20 z-10">
          <motion.button
            initial="hide"
            animate={changeIcon ? "show" : "hide"}
            onClick={() => setChangeIcon(!changeIcon)}
            className="md:hidden flex flex-col space-y-1 relative z-10"
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
              className="w-6 bg-green-600/80  h-[2px] block"
            ></motion.span>
          </motion.button>
          <LoginIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
