import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfilePage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setForm((prev) => ({
          ...prev,
          name: data.name,
          email: data.email,
        }));
      } catch (error) {
        console.error(error);
        setMessage('خطا در دریافت اطلاعات کاربر');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage('رمز عبور و تکرار آن یکسان نیستند');
      return;
    }

    try {
      setLoading(true);
      await axios.put(
        '/api/users/profile',
        {
          name: form.name,
          email: form.email,
          password: form.password || undefined,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage('پروفایل با موفقیت بروزرسانی شد');
    } catch (error) {
      console.error(error);
      setMessage('خطا در بروزرسانی پروفایل');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-md rounded-lg w-full max-w-xl p-8">
        <h2 className="text-center text-xl font-bold mb-6 text-gray-800">بروزرسانی پروفایل</h2>

        {message && (
          <p className="text-center mb-4 text-sm text-red-500">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* نام */}
          <div className="flex flex-col text-right">
            <label htmlFor="name" className="mb-1 text-sm text-gray-600">نام</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="نام خود را وارد نمایید"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* ایمیل */}
          <div className="flex flex-col text-right">
            <label htmlFor="email" className="mb-1 text-sm text-gray-600">ایمیل</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ایمیل خود را وارد نمایید"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* رمز */}
          <div className="flex flex-col text-right">
            <label htmlFor="password" className="mb-1 text-sm text-gray-600">رمزعبور</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="رمزعبور جدید (اختیاری)"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* تکرار رمز */}
          <div className="flex flex-col text-right">
            <label htmlFor="confirmPassword" className="mb-1 text-sm text-gray-600">تکرار رمزعبور</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="تکرار رمزعبور"
              className="border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'در حال ارسال...' : 'بروزرسانی'}
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

export default UserProfilePage;
