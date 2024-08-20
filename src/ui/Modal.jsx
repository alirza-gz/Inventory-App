import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="backdrop-blur-sm w-full h-screen fixed left-0 top-0 bg-secondary-700 bg-opacity-30 z-50">
        <div
          ref={ref}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-0 p-4  rounded-lg shadow-lg transition-all duration-500 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="flex justify-between items-center pb-2 mb-6 border-b border-b-secondary-300 ">
            <p className="text-secondary-700 font-bold">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
