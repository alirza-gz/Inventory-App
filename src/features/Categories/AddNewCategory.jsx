import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import TextAreaField from "../../ui/TextAreaField";
import { BiLayerPlus } from "react-icons/bi";
import toast from "react-hot-toast";
import { useCategoriesDispatch } from "../../context/CategoriesContext";

function AddNewCategory() {
  const dispatch = useCategoriesDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newCategory = {
      ...data,
    };
    toast.success(`دسته بندی ${data.title} با موفقیت اضافه شد!`);
    dispatch({ type: "addCategory", payload: newCategory });
    reset();
  };
  return (
    <div className="border-2 border-secondary-100 p-3 rounded-xl">
      <button onClick={() => setIsVisible((is) => !is)}>
        <h2
          className={`flex items-center text-lg font-bold text-primary-800 ${
            isVisible ? "opacity-1" : "opacity-60"
          }`}
        >
          <BiLayerPlus className="text-primary-900 text-xl ml-2" />
          <span> افزودن دسته بندی جدید</span>
        </h2>
      </button>
      {isVisible ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4 mt-4 pb-3"
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
          <TextAreaField
            label="توضیح"
            name="description"
            register={register}
            required
            validationSchema={{
              required: "توضیحات ضروری است!",
              minLength: {
                value: 10,
                message: "حداقل 10 کاراکتر را وارد کنید!",
              },
            }}
            errors={errors}
          />
          <div className="flex items-center gap-x-3">
            <button className="btn btn--primary flex-1 mt-4" type="submit">
              ثبت دسته بندی
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="btn border border-secondary-400 text-secondary-400 py-2.5 px-4 flex-1 mt-4"
            >
              انصراف
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddNewCategory;
