import React, { useEffect, useState } from "react";
import LoginImage2 from "../assets/LoginImage2.png";
import Input from "../components/general/Input";
import Button from "../components/general/button";
import { SidebarLayout } from "../layouts/Sidebar/SidebarLayout";
import axios from "../utils/axios";
import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/use-auth-store";

export default function Register() {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [sidebarExpanded, setSidebarExpanded] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { isAdmin, userId, setIsAdmin, setUserId } = useAuthStore();
  console.log(userId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !repeatPassword) {
      alert("لطفاً همه فیلدها را پر کنید.");
      return;
    }

    if (password !== repeatPassword) {
      alert("رمز عبور و تکرار آن مطابقت ندارند.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const res = await axios.post("/api/users", {
        username: name,
        email,
        password,
        confirm_Password: repeatPassword,
      });
      setUserId(res.data._id);
      setIsAdmin(res.data.isAmin);
      console.log("✅ Register success:", res.data);
      navigator("/");
    } catch (err) {
      setError(err.response?.data?.message || "ثبت‌نام ناموفق بود.");
      console.error("❌ Register error:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userId) {
      navigator(-1);
    }
  }, [navigator]);

  return (
    <div className="flex min-h-screen justify-between">
      <aside
        className={`fixed top-0 right-0 h-screen ${sidebarExpanded ? "w-1/5" : "w-18"}`}
      >
        <SidebarLayout expanded={sidebarExpanded} />
      </aside>
      <form onSubmit={handleSubmit} className="m-10 mr-25">
        <h1 className="mb-6 text-2xl font-bold">ثبت نام</h1>
        {error && <p className="mb-4 text-red-500">{error}</p>}{" "}
        {/* ✅ Error Display */}
        <div className="mb-6">
          <Input
            id="name"
            type="text"
            label="نام"
            placeholder="نام خود را وارد نمایید"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Input
            id="registerEmail"
            type="email"
            label="ایمیل"
            placeholder="ایمیل خود را وارد نمایید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Input
            className="w-md"
            id="registerPassword"
            type="password"
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد نمایید"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Input
            className="w-md"
            id="registerPasswordRepeat"
            type="password"
            label="تکرار رمز عبور"
            placeholder="رمز عبور خود را دوباره وارد نمایید"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="bg-primaryPink mt-6 mb-6 w-16 min-w-max cursor-pointer rounded-lg p-3 text-white"
          disabled={loading}
        >
          {loading ? "در حال ثبت‌نام..." : "ورود"}
        </Button>
        <div className="flex">
          <p>عضو هستید؟</p>
          <a href="./Login.jsx" className="text-primaryPink mr-2.5">
            ورود
          </a>
        </div>
      </form>

      <div>
        <img
          src={LoginImage2}
          alt="Login image"
          className="m-9 ml-12 h-165 w-3xl rounded-xl object-cover"
        />
      </div>
    </div>
  );
}
