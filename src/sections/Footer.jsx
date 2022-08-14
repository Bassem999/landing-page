import Logo from "../assets/logo.png";
import Pattern from "../components/Pattern";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Li = ({ text, href }) => {
  return (
    <li>
      <a className="text-[#646464] hover:text-[#64646490] duration-200 capitalize text-sm" href={href}>
        {text}
      </a>
    </li>
  );
};

export default () => {
  return (
    <footer className="bg-[#F8F8F8] relative">
      <div className="absolute top-0 -translate-y-1/2 -left-20">
        <Pattern />
      </div>
      <div className="py-20 container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6  gap-x-8 gap-y-10 lg:gap-y-0 font-body">
        <div className="md:col-span-2 text-[#646464] space-y-4">
          <img src={Logo} />
          <p>
            But i must explain to you all this mistaken idea of dencouncing
            pleasure.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-2xl font-semibold text-[#212121] capitalize">
            quick links
          </h4>
          <ul className="space-y-1">
            <Li text="about our company" href="/" />
            <Li text="services we provide" href="/" />
            <Li text="career & opportunity" href="/" />
            <Li text="privacy policy" href="/" />
            <Li text="contact us" href="/" />
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-2xl font-semibold text-[#212121] capitalize">
            company
          </h4>
          <ul className="space-y-1">
            <Li text="about company" href="/" />
            <Li text="our testimonials" href="/" />
            <Li text="latest news" href="/" />
            <Li text="our mission" href="/" />
            <Li text="get a free quote" href="/" />
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-2xl font-semibold text-[#212121] capitalize">
            contact us
          </h4>
          <ul className="space-y-1">
            <Li text="sagrada familia, herba" href="/" />
            <Li text="street front usa" href="/" />
            <Li text="brandoxide@gmail.com" href="/" />
            <Li text="our mission" href="/" />
            <Li text="002-568423591" href="/" />
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-2xl font-semibold text-[#212121] capitalize">
            follow us
          </h4>
          <div className="space-x-2 flex">
            <a
              href="/"
              className="text-white bg-gray-300 w-9 h-9 hover:bg-[#37806B] rounded-full flex items-center justify-center duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="/"
              className="text-white bg-gray-300 w-9 h-9 hover:bg-[#37806B] rounded-full flex items-center justify-center duration-200"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="/"
              className="text-white bg-gray-300 w-9 h-9 hover:bg-[#37806B] rounded-full flex items-center justify-center duration-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="/"
              className="text-white bg-gray-300 w-9 h-9 hover:bg-[#37806B] rounded-full flex items-center justify-center duration-200"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center font-body text-[#646464] py-3 border border-t-[#C4C4C4] text-sm">
        Copyright @ 2020{" "}
        <a
          href="/"
          className="text-[#37806B] hover:text-[#CAA892] duration-200 hover:underline "
        >
          Brandoxide.all
        </a>{" "}
        right reserved.
      </div>
    </footer>
  );
};
