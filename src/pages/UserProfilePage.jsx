import React, { useState } from 'react';

const Profile = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('رمز عبور و تکرار آن یکسان نیستند!');
      return;
    }

    console.log('فرم ارسال شد:', form);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-md rounded-lg w-full max-w-xl p-8">
        <h2 className="text-center text-xl font-bold mb-6 text-gray-800">بروزرسانی پروفایل</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* نام */}
          <div className="flex flex-col text-right">
            <label htmlFor="name" className="mb-1 text-sm text-gray-600">نام</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="نام خود را وارد نمایید"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* ایمیل */}
          <div className="flex flex-col text-right">
            <label htmlFor="email" className="mb-1 text-sm text-gray-600">ایمیل</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ایمیل خود را وارد نمایید"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* رمز عبور */}
          <div className="flex flex-col text-right">
            <label htmlFor="password" className="mb-1 text-sm text-gray-600">رمزعبور</label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              placeholder="رمزعبور خود را وارد نمایید"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* تکرار رمزعبور */}
          <div className="flex flex-col text-right">
            <label htmlFor="confirmPassword" className="mb-1 text-sm text-gray-600">تکرار رمزعبور</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="تکرار رمزعبور خود را وارد نمایید"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* دکمه‌ها */}
          <div className="flex justify-between pt-4">
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
            >
              بروزرسانی
            </button>
            <button
              type="button"
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
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
