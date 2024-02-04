import { Link } from "react-router-dom";
import FooterImage from "../assets/footer.webp";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const Footer = () => {
  return (
    <footer className="flex bg-white z-10 border-t border-green-600/50 rounded-t-xl mt-auto">
      <div className="flex flex-col-reverse md:flex-row justify-between w-[90%] mx-auto py-7 md:py-2">
        <div className="flex flex-col justify-center items-center md:items-start text-sm md:text-base">
          <span>funatufauna@gmail.com</span>
          <span>3122451285</span>
          <span>Boyacá Sogamoso</span>
        </div>
        <div className="flex flex-col md:flex-row min-h-fit w-auto justify-center items-center">
          <img className="w-[420px] h-auto my-7 md:my-0" src={FooterImage} alt="footerAsset" loading="lazy" />
        </div>
        <div className="flex flex-row gap-x-5 justify-center items-center">
          <Link
            to="https://www.instagram.com/fundacion_natufauna/?hl=es-la"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </Link>
          <Link
            to="https://www.facebook.com/FundacionNatufauna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </Link>
          <Link
            to="https://www.youtube.com/@fundacionnatufaunacolombia733"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
