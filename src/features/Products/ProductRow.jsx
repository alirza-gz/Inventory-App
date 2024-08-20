import { BiTrash } from "react-icons/bi";
import Table from "../../ui/Table";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { TbPencilMinus } from "react-icons/tb";
import AddNewProduct from "./AddNewProduct";

function ProductRow({ product, index, handleDelete }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(product.title, 30)}</td>
      <td>{toPersianNumbersWithComma(product.price)} تومان</td>
      <td>{toLocalDateShort(product.createdAt)}</td>
      <td>{product.category}</td>
      <td>
        <span className="badge badge--primary text-sm">
          {toPersianNumbers(product.quantity)}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <BiTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${product.title}`}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={product.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() => handleDelete(product.id)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900 cursor-pointer" />
            </button>
            <Modal
              title={`ویرایش ${product.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <AddNewProduct
                productToEdit={product}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
        </div>
      </td>
    </Table.Row>
  );
}

export default ProductRow;
