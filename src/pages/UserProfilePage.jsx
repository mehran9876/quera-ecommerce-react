import React, { useState } from "react";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("رمز عبور و تکرار آن یکسان نیستند!");
      return;
    }

    console.log("فرم ارسال شد:", form);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-xl font-bold text-gray-800">
          بروزرسانی پروفایل
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* نام */}
          <div className="flex flex-col text-right">
            <label htmlFor="name" className="mb-1 text-sm text-gray-600">
              نام
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="نام خود را وارد نمایید"
              className="rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* ایمیل */}
          <div className="flex flex-col text-right">
            <label htmlFor="email" className="mb-1 text-sm text-gray-600">
              ایمیل
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ایمیل خود را وارد نمایید"
              className="rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* رمز عبور */}
          <div className="flex flex-col text-right">
            <label htmlFor="password" className="mb-1 text-sm text-gray-600">
              رمزعبور
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              placeholder="رمزعبور خود را وارد نمایید"
              className="rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* تکرار رمزعبور */}
          <div className="flex flex-col text-right">
            <label
              htmlFor="confirmPassword"
              className="mb-1 text-sm text-gray-600"
            >
              تکرار رمزعبور
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="تکرار رمزعبور خود را وارد نمایید"
              className="rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* دکمه‌ها */}
          <div className="flex justify-between pt-4">
            <button
              type="submit"
              className="rounded bg-pink-600 px-6 py-2 text-white transition hover:bg-pink-700"
            >
              بروزرسانی
            </button>
            <button
              type="button"
              className="rounded bg-pink-600 px-6 py-2 text-white transition hover:bg-pink-700"
            >
              سفارشات من
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
