import { BsExclamationCircle } from "react-icons/bs";

function Empty({ resourceName }) {
  return (
    <div className="flex items-center justify-center gap-x-2 py-3 text-white rounded-lg bg-gradient-to-r from-primary-800 to-primary-400 w-full">
      <BsExclamationCircle className="w-5 h-5"/>
      <p className="font-bold">{resourceName} ثبت نگردیده است.</p>
    </div>
  );
}
export default Empty;
