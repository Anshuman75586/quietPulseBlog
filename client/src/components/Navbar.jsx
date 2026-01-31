import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <div className="flex justify-between items-center py-5 px-4 sm:px-20 xl:px-32 cursor-pointer bg-white shadow-md">
      {/* Text Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        QuietPulse
      </h1>

      {/* Dashboard / Login Button */}
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm sm:text-base cursor-pointer bg-primary text-white px-8 sm:px-10 py-2.5 sm:py-3 transition-all duration-300 hover:shadow-lg"
      >
        {token ? "Dashboard" : "Login"}
        <span className="inline-block w-3 sm:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Navbar;
