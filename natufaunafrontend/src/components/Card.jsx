import { motion } from "framer-motion";

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
  const variantsCars = {
    visible: ({ delay }) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 1.2,
        ease: "easeInOut",
        type: "spring",
      },
    }),
    hidden: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-5 p-5 shadow-md rounded-md border bg-white"
      custom={{ delay: petId * 0.4 }}
      initial="hidden"
      animate="visible"
      variants={variantsCars}
    >
      <img
        className="sm:max-w-44 sm:max-h-60 md:max-w-56 md:max-h-72 rounded-md shadow-md border"
        src={petImage}
        alt="adoption-pet"
      />
      <div className="flex flex-col gap-y-2 text-sm md:text-base bg-white">
        <header className="flex justify-center text-center">
          <h1 className="text-xl md:text-2xl font-medium">{petName}</h1>
        </header>
        <article className="flex flex-col gap-y-2 text-pretty">
          <p>{petHistory}</p>
          <span className="font-medium">Characteristics:</span>
          <ul className="text-sm md:text-base list-disc ml-10">
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
        <footer className="flex w-full justify-center mt-4">
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
        </footer>
      </div>
    </motion.div>
  );
};

export default Card;
