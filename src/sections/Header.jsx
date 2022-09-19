import { useState, useRef, useEffect } from "react";
import Logo from "../assets/logo.png";
export default () => {
  const [isOpen, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!isOpen);
  }
  const handleClickOutside = () => {
    setOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const links = [
    "home",
    "project",
    "bassem",
    "services",
    "about",
    "blog",
    "shop",
    "contact",
  ];

  return (
    <header className="container lg:py-8 lg:flex items-center relative justify-between z-20 bg-white">
      <h1 className="z-20 relative bg-white py-8 lg:p-0 inline-block">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </h1>
      <nav
        ref={ref}
        className={`lg:block origin-top lg:translate-y-0 -translate-y-full z-10 bg-white lg:h-auto inset-x-0 absolute lg:static p-8 lg:p-0 transition-all duration-500
        ${isOpen && "-translate-y-0"}`}
      >
        <ul className="lg:flex items-ceneter lg:space-x-8 space-y-4 lg:space-y-0">
          {links.map((link, i) => (
            <li key={link}>
              <a
                className="uppercase text-sm font-medium text-[#212121] hover:text-[#646464] duration-200"
                href={(i = 0 ? `/` : `/${link}`)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/sign-up"
              className="capitalize px-5 py-2 rounded-tl-2xl rounded-br-2xl text-white bg-[#CAA892] hover:bg-[#37806B] duration-200"
            >
              sign up
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleOpen}
        ref={ref}
        className="rounded-md p-3 z-20 bg-gray-100 space-y-1.5 lg:hidden absolute top-10 right-6"
      >
        <span
          className={`w-6 h-0.5 block bg-gray-600 transition-all duration-200 
          ${isOpen && "rotate-45 translate-y-2 "}`}
        ></span>
        <span
          className={`w-6 h-0.5 block bg-gray-600 transition-all duration-200 
          ${isOpen && "rotate-45 -translate-y-1 opacity-0"}`}
        ></span>
        <span
          className={`w-6 h-0.5 block bg-gray-600 transition-all duration-200 
          ${isOpen && "-rotate-45 -translate-y-2 "}`}
        ></span>
      </button>
    </header>
  );
};

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};
