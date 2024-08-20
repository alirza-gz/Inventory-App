import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <div className="w-full px-6 py-4 col-span-12 lg:col-span-10 border-b-2 border-secondary-100">
      <div className="container mx-auto xl:max-w-screen-xl flex justify-between items-center">
        <div className="text-xl text-secondary-700 font-bold bg-secondary-200 py-1.5 px-3 rounded-full">
          سیستم مدیریت انبارداری
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Header;
