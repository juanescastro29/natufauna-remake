import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Card = ({
  petId,
  petImage,
  petName,
  petHistory,
  petAge,
  petSize,
  adoptionStatus,
  sponsorshipStatus,
}) => {
  const { session } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const variantsCars = {
    visible: ({ delay }) => ({
      scale: 1,
      y: 0,
      transition: {
        delay,
        duration: 1.2,
        ease: "easeInOut",
        type: "spring",
      },
    }),
    hidden: {
      scale: 0,
      y: -20,
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5 p-5 shadow-md rounded-md border bg-white"
        custom={{ delay: petId * 0.4 }}
        initial="hidden"
        animate="visible"
        variants={variantsCars}
      >
        <img
          className="sm:max-w-44 sm:max-h-60 md:max-w-56 md:max-h-72 rounded-md shadow-md"
          src={petImage}
          alt="adoption-pet"
        />
        <div className="flex flex-col gap-y-2 text-sm md:text-base bg-white">
          <header className="flex justify-center text-center">
            <h1 className="text-xl md:text-2xl font-medium">{petName}</h1>
          </header>
          <article className="flex flex-col gap-y-2 text-pretty text-sm md:text-base p-2 flex-wrap">
            <span className="font-medium">Characteristics:</span>
            <ul className="list-disc ml-10">
              <li>Age: {petAge}</li>
              <li>Size: {petSize}</li>
            </ul>
            <div className="flex flex-col md:flex-nowrap gap-y-2 gap-x-2 text-sm md:text-base font-medium">
              <span>
                Adoption:
                {adoptionStatus ? (
                  <span className="bg-green-100 text-green-600/90 text-xs font-medium px-2.5 py-0.5 rounded-full ml-2">
                    Avalible
                  </span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full ml-2">
                    On proccess
                  </span>
                )}
              </span>
              <span>
                Sponsorship:
                {sponsorshipStatus ? (
                  <span className="bg-green-100 text-green-600/90 text-xs font-medium  px-2.5 py-0.5 rounded-full ml-2">
                    Avalible
                  </span>
                ) : (
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium  px-2.5 py-0.5 rounded-full ml-2">
                    On proccess
                  </span>
                )}
              </span>
            </div>
          </article>
          <footer className="flex w-full justify-center mt-4 gap-2">
            {session ? (
              <>
                <motion.button
                  type="button"
                  className="flex text-green-800 bg-green-500/40 rounded-full text-sm px-5 py-2 text-center justify-center items-center disabled:bg-yellow-500/40 disabled:text-yellow-800"
                  disabled={!adoptionStatus}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  {adoptionStatus ? "Adopt me!" : "Not available"}
                </motion.button>
                <motion.button
                  type="button"
                  className="flex text-green-800 bg-green-500/40 rounded-full text-sm px-5 py-2 text-center justify-center items-center"
                  onClick={() => handleOpen()}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  Story
                </motion.button>
              </>
            ) : (
              <Link to="/login">
                <motion.button
                  type="button"
                  className="flex text-green-800 bg-green-500/40 rounded-full text-sm px-10 py-2 text-center justify-center items-center"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  Login
                </motion.button>
              </Link>
            )}
          </footer>
        </div>
      </motion.div>
      <Modal
        type="history"
        data={{
          petName: petName,
          petImage: petImage,
          petHistory: petHistory,
        }}
        handleOpen={handleOpen}
        open={open}
      />
    </>
  );
};

export default Card;
