import { useMutation } from "@tanstack/react-query";
import Button from "../components/general/button";
import { useState } from "react";

const createProduct = async (formDataToSend) => {
  const response = await fetch("https://qbc9.liara.run/api/products", {
    method: "POST",
    body: formDataToSend,
  });

  if (!response.ok) {
    throw new Error("خطا در ثبت محصول");
  }

  return response.json();
};

export default function AdminProductCreate() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      alert("محصول با موفقیت ثبت شد");
    },
    onError: (error) => {
      alert(error.message || "خطایی رخ داد");
    },
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("آپلود تصویر با خطا مواجه شد");
      }

      const data = await response.json();

      setImage(data.url || data.filename);
    } catch (error) {
      alert("خطا در آپلود تصویر");
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("price", price);
    formDataToSend.append("brand", brand);
    formDataToSend.append("description", description);
    formDataToSend.append("stock", stock);
    formDataToSend.append("quantity", quantity);
    if (image) formDataToSend.append("image", image);

    mutation.mutate(formDataToSend);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-right text-2xl font-bold">محصول جدید</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-lg border border-dashed border-[#3F4043] bg-white p-6 text-center text-black dark:bg-[#141516] dark:text-white">
            <input
              type="file"
              onChange={handleImageChange}
              className="text-right"
            />
          </div>

          <div>
            <label className="mb-1 block text-right">نام</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="نام محصول را وارد نمایید"
              className="text-placeholder w-full rounded-lg border border-[#3F4043] bg-white p-2 text-right text-sm dark:bg-[#141516]"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-right">قیمت</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="قیمت محصول را وارد نمایید"
                className="text-placeholder w-full rounded-lg border border-[#3F4043] bg-white p-2 text-right text-sm dark:bg-[#141516]"
              />
            </div>
            <div>
              <label className="mb-1 block text-right">برند</label>
              <input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                type="text"
                placeholder="برند محصول را وارد نمایید"
                className="text-placeholder w-full rounded-lg border border-[#3F4043] bg-white p-2 text-right text-sm dark:bg-[#141516]"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-right">توضیحات</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="توضیحات محصول را وارد نمایید"
              className="text-placeholder w-full rounded-lg border border-[#3F4043] bg-white p-3 text-right text-sm dark:bg-[#141516]"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            <div>
              <label className="mb-1 block text-right">تعداد قابل خرید</label>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                placeholder="تعداد قابل خرید را وارد نمایید"
                className="text-placeholder w-full rounded-lg border border-[#3F4043] bg-white p-2 text-right dark:bg-[#141516]"
              />
            </div>
            <div>
              <label className="mb-1 block text-right">موجودی</label>
              <select
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="text-placeholder w-full rounded-lg border border-[#3F4043] bg-white p-2 text-right dark:bg-[#141516]"
              >
                <option value="">وضعیت موجودی را انتخاب کنید</option>
                <option value="موجود">موجود</option>
                <option value="ناموجود">ناموجود</option>
              </select>
            </div>
          </div>

          <Button
            type="submit"
            className="mt-6 cursor-pointer rounded-lg bg-[#DB2777] p-3 text-sm text-white"
          >
            {mutation.isPending ? "در حال ارسال..." : "ساخت محصول جدید"}
          </Button>
        </form>
      </div>
    </div>
  );
}
