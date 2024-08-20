import { GoChecklist } from "react-icons/go";
import NumOfItems from "./NumOfItems";
function Sidebar() {
  return (
    <div className="hidden lg:block col-span-2 row-span-2 border border-secondary-100">
      <div className="p-4 bg-secondary-0 dark:bg-slate-900 h-full">
        <div className="mt-16 w-full flex flex-col items-center text-secondary-600">
          <GoChecklist className="w-28 h-28 " />
          <h1 className="mt-4 text-xl font-semibold ">انبارداری مرکزی</h1>
        </div>
        <nav>
          <NumOfItems />
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
