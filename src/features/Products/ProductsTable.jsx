import toast from "react-hot-toast";
import { useProductsDispatch } from "../../context/ProductsContext";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProductRow from "./ProductRow";

function ProductsTable({ products }) {
  const dispatch = useProductsDispatch();
  const handleDelete = (id) => {
    dispatch({ type: "deleteProduct", payload: id });
    toast.success("محصول با موفقیت حذف شد.");
  };

  console.log(products);
  if (products.length === 0) return <Empty resourceName="هیچ محصولی" />;
  return (
    <div className="overflow-x-auto dark:[color-scheme:dark]">
      <Table>
        <Table.Header>
          <th>#</th>
          <th>نام محصول</th>
          <th>قیمت</th>
          <th>تاریخ ایجاد</th>
          <th>دسته بندی</th>
          <th>تعداد</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {products.map((product, index) => (
            <ProductRow
              key={product.id}
              product={product}
              index={index}
              handleDelete={handleDelete}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProductsTable;
