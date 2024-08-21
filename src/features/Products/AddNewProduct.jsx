import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { BiSolidPlusCircle } from "react-icons/bi";
import toast from "react-hot-toast";
import { useCategories } from "../../context/CategoriesContext";
import { useProductsDispatch } from "../../context/ProductsContext";

function AddNewProduct({ productToEdit = {}, onClose }) {
  const { id: editId } = productToEdit;
  const { title, category, price , quantity, createdAt } = productToEdit;
  const isEditSession = !!editId;
  const categories = useCategories();
  const dispatch = useProductsDispatch();

  let editValues;
  if (isEditSession) {
    editValues = {
      title,
      category,
      price,
      quantity,
      createdAt,
    };
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: editValues });

  const onSubmit = (data) => {
    const newProduct = {
      ...data,
      id: editId || Date.now(),
      createdAt: editId ? createdAt : new Date().toISOString(),
    };

    if (isEditSession) {
      dispatch({ type: "editProduct", payload: { newProduct, id: editId } });
      toast.success(`محصول  ${data.title} با موفقیت ویرایش شد!`);
      onClose();
    } else {
      dispatch({ type: "addProduct", payload: newProduct });
      toast.success(`محصول  ${data.title} با موفقیت اضافه شد!`);
      reset();
    }
  };
  return (
    <div
      className={`${
        isEditSession ? "p-1" : "border-2 border-secondary-100 p-3 rounded-xl "
      }`}
    >
      {isEditSession ? (
        <></>
      ) : (
        <h2
          className={`flex items-center text-lg font-bold text-primary-800
          }`}
        >
          <BiSolidPlusCircle className="text-primary-900 text-xl ml-2" />
          <span> افزودن محصول جدید</span>
        </h2>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col gap-y-4 pb-3 ${isEditSession ? "" : "mt-4"}`}
      >
        <TextField
          label="عنوان"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "عنوان ضروری است!",
            minLength: {
              value: 3,
              message: "حداقل 3 کاراکتر را وارد کنید!",
            },
          }}
          errors={errors}
        />
        <TextField
          label="قیمت"
          name="price"
          register={register}
          type="number"
          required
          validationSchema={{
            required: "قیمت ضروری است!",
          }}
          errors={errors}
        />
        <TextField
          label="تعداد"
          name="quantity"
          register={register}
          type="number"
          required
          validationSchema={{
            required: "تعداد ضروری است!",
          }}
          errors={errors}
        />
        <RHFSelect
          label="دسته بندی"
          name="category"
          register={register}
          required
          options={categories}
        />
        <button type="submit" className="btn btn--primary w-full mt-4">
          {isEditSession ? "ویرایش محصول" : "ثبت محصول جدید"}
        </button>
      </form>
    </div>
  );
}

export default AddNewProduct;
