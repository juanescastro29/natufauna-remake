import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Adoption from "../assets/adoption.png";
import Sponsorship from "../assets/sponsorship.png";
import Donation from "../assets/donation.png";
import Mission from "../assets/mission.webp";
import Vision from "../assets/vision.webp";

const Home = () => {
  return (
    <div className="flex flex-col w-full mt-5 mb-10 p-5 gap-y-10">
      <section className="flex justify-center w-[80%] mx-auto p-5">
        <iframe
          className="rounded-xl shadow-lg w-[420px] h-[220px] md:w-[520px] md:h-[300px]"
          src="https://www.youtube.com/embed/WdeiBHDbIls?si=diOOocgjANcZcKT4"
          loading="lazy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>

      <section className="flex flex-row flex-wrap justify-center items-center w-[80%] gap-x-8 md:gap-x-20 lg:gap-x-36 gap-y-4 mx-auto p-5">
        <Link to="/adoptions">
          <motion.div
            className="flex flex-col justify-center items-center gap-2 border-2 size-28 md:size-36 rounded-full border-green-600/50 shadow-md"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
          >
            <img
              className="size-10 md:size-12"
              src={Adoption}
              alt="adoptionIcon"
              loading="lazy"
            />
            <h1 className="text-sm md:text-base">Adoptions</h1>
          </motion.div>
        </Link>

        <Link to="/sponsorships">
          <motion.div
            className="flex flex-col justify-center items-center gap-2 border-2 size-28 md:size-36 rounded-full border-green-600/50 shadow-md"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            <img
              className="size-10 md:size-12"
              src={Sponsorship}
              alt="sponsorshipIcon"
              loading="lazy"
            />
            <h1 className="text-sm md:text-base">Sponsorships</h1>
          </motion.div>
        </Link>
        <Link to="/donations">
          <motion.div
            className="flex flex-col justify-center items-center gap-2 border-2 size-28 md:size-36 rounded-full border-green-600/50 shadow-md"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            <img
              className="size-10 md:size-12"
              src={Donation}
              alt="donationIcon"
              loading="lazy"
            />
            <h1 className="text-sm md:text-base">Donations</h1>
          </motion.div>
        </Link>
      </section>

      <section className="flex flex-col w-[80%] mx-auto p-5 gap-10">
        <h1 className="text-2xl md:text-3xl text-green-600/100 font-medium text-center">
          Our Foundation
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-5">
          <motion.img
            className="sm:max-w-64 sm:max-h-96 rounded-2xl shadow-xl"
            src={Mission}
            alt="mission"
            loading="lazy"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          />
          <div className="flex flex-col gap-y-4">
            <h1 className="text-xl md:text-2xl text-green-600/100 font-medium">
              Mission
            </h1>
            <p className="text-sm md:text-base text-pretty">
              We are committed to protecting the environment and well-being
              animal, working tirelessly to promote respect for life. We seek to
              build awareness through education, encouraging everyone to defend
              and protect any form of life equitably. Our movement is guided by
              interspecies brotherhood and material equity.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col-reverse md:flex-row gap-10 p-5">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-xl md:text-2xl text-green-600/100 font-medium">
              Vision
            </h1>
            <p className="text-sm md:text-base text-pretty">
              The Natufauna Foundation, a non-profit organization, is based on
              values such as life, humility, kindness, work, responsibility and
              commitment. Our social approach, through education, culture and
              humanitarian responsibility, seeks to build a conscious future.
              Active members work tirelessly to defend and protect life
              everywhere. In addition, we design and promote public policies at
              the national level, and in 2020 we inaugurated an animal welfare
              home as a symbol of our educational and responsible work.
            </p>
          </div>
          <motion.img
            className="sm:max-w-64 sm:max-h-96  rounded-2xl shadow-xl"
            src={Vision}
            alt="vision"
            loading="lazy"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center w-[80%] mx-auto gap-y-5 md:gap-x-5 p-5 text-pretty">
        <div className="flex flex-col p-2 md:min-w-[320px]">
          <h1 className="text-xl md:text-2xl text-green-600/100 font-medium">
            Horario de actividades:
          </h1>
          <ul className="text-sm md:text-base list-disc ml-10 p-2">
            <li>10:00 AM - 3:00 PM</li>
            <li>Jornadas de adopción.</li>
            <li>Calle 15 con Cra 11</li>
          </ul>
        </div>
        <span className="w-72 h-[3px] md:w-[3px] md:h-56 bg-green-700/60 block rounded-full" />
        <div className="flex flex-col p-2 md:min-w-[320px]">
          <h1 className="text-xl md:text-2xl text-green-600/100 font-medium">
            Programas y proyectos sociales:
          </h1>
          <ul className="text-sm md:text-base list-disc ml-10 p-2">
            <li>Jornadas de Adopción.</li>
            <li>Campañas de Esterilización.</li>
            <li>Programa de Voluntariado.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
