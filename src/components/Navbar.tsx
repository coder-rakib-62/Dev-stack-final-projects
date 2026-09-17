import Logo from "../assets/logo-text.png";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="flex justify-between  container mx-auto">
          <img src={Logo} alt="NavImage" />
          <ul className="flex gap-4 items-center">
            <li className="transition duration-300 hover:text-pink-500 cursor-pointer">
              Home
            </li>
            <li className="transition duration-300 hover:text-pink-500 cursor-pointer">
              Technologies
            </li>
            <li className="transition duration-300 hover:text-pink-500 cursor-pointer">
              Projects
            </li>
            <li className="transition duration-300 hover:text-pink-500 cursor-pointer">
              About
            </li>
            <li className="transition duration-300 hover:text-pink-500 cursor-pointer">
              Contact
            </li>
          </ul>
          <div className="flex gap-4">
            <button>Sign In</button>
            <button className="btn btn-active btn-secondary rounded-4xl p-5">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
