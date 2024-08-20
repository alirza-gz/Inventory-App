import MainPage from "../pages/MainPage";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="min-h-screen w-full grid grid-cols-12 grid-rows-[auto_minmax(250px,_1fr)]">
      <Sidebar />
      <Header />
      <div className="col-span-12 lg:col-span-10 pt-4 pb-9 lg:py-9 overflow-y-auto bg-secondary-100 dark:bg-slate-900 ">
        <MainPage />
      </div>
    </div>
  );
}

export default AppLayout;
