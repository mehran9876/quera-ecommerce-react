import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Button from "../components/general/button";
import { useEffect, useState } from "react";

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
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [quantity, setQuantity] = useState('');
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
    <div className="min-h-screen text-white p-6">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-right">محصول جدید</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border border-dashed border-[#3F4043] rounded-lg p-6 text-center bg-[#141516]">
            <input type="file" onChange={handleImageChange} className="text-right" />
          </div>

          <div>
            <label className="block mb-1 text-right">نام</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="نام محصول را وارد نمایید"
              className="border w-full p-2 rounded-lg border-[#3F4043] bg-[#141516] text-right text-[#9CA3AF] text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-right">قیمت</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="قیمت محصول را وارد نمایید"
                className="border w-full p-2 rounded-lg bg-[#141516] border-[#3F4043] text-[#9CA3AF] text-right text-sm"
              />
            </div>
            <div>
              <label className="block mb-1 text-right">برند</label>
              <input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                type="text"
                placeholder="برند محصول را وارد نمایید"
                className="border w-full p-2 rounded-lg border-[#3F4043] bg-[#141516] text-[#9CA3AF] text-right text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-right">توضیحات</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="توضیحات محصول را وارد نمایید"
              className="border w-full p-3 rounded-lg bg-[#141516] border-[#3F4043] text-[#9CA3AF] text-right text-sm"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block mb-1 text-right">تعداد قابل خرید</label>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                type="number"
                placeholder="تعداد قابل خرید را وارد نمایید"
                className="border w-full p-2 rounded-lg border-[#3F4043] bg-[#141516] text-[#9CA3AF] text-right"
              />
            </div>
            <div>
              <label className="block mb-1 text-right">موجودی</label>
              <select
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="border w-full p-2 rounded-lg bg-[#141516] border-[#3F4043] text-[#9CA3AF] text-right"
              >
                <option value="">وضعیت موجودی را انتخاب کنید</option>
                <option value="موجود">موجود</option>
                <option value="ناموجود">ناموجود</option>
              </select>
            </div>
          </div>

          <Button
            type="submit"
            className="mt-6 cursor-pointer rounded-lg bg-[#DB2777] p-3 text-sm"
          >
            {mutation.isPending ? "در حال ارسال..." : "ساخت محصول جدید"}
          </Button>
        </form>
      </div>
    </div>
  );
}