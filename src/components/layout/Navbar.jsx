import navLinks from "../../data/navLinks";

import socialData from "../../data/socialData";
import SocialButton from "../ui/SocialButton";

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav
        className=" mx-auto
        mt-6
        flex
        max-w-7xl
        items-center
        justify-between
        rounded-full
        border
        border-white/10
        bg-white/5
        px-8
        py-4
        backdrop-blur-xl
      "
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          SoraAizawaa<span className="text-cyan-400">.</span>
        </h1>

        {/* Menu */}
        <ul className="flex gap-8 text-gray-300">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="
                  text-gray-300
                  transition
                  duration-300
                  hover:text-cyan-400
                "
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-5 text-xl">
          {socialData.map((item) => (
            <SocialButton key={item.id} icon={item.icon} url={item.url} />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
