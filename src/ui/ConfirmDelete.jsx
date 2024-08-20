function ConfirmDelete({ resourceName, onConfirm, onClose }) {
  return (
    <div>
      <h2 className="mb-8 font-bold">
        آیا از حذف محصول {resourceName} مطمئن هستید؟
      </h2>
      <div className="flex gap-x-16 justify-center items-center">
        <button onClick={onConfirm} className="btn btn--danger py-2.5 flex-1">
          تایید
        </button>
        <button onClick={onClose} className="btn btn--primary flex-1">
          لغو
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
