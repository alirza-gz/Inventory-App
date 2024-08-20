import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode} className="flex items-center">
      {isDarkMode ? (
        <HiOutlineSun className="w-6 h-6 text-yellow-400" />
      ) : (
        <HiOutlineMoon className="w-6 h-6 text-primary-900" />
      )}
    </button>
  );
}

export default DarkModeToggle;
