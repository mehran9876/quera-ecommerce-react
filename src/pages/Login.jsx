import React, { useState } from "react";
import LoginImage2 from "../assets/LoginImage2.png";
import Input from "../components/general/Input";
import Button from "../components/general/button";
import { SidebarLayout } from "../layouts/Sidebar/SidebarLayout";
import axios from "../utils/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("لطفاً ایمیل و رمز عبور را وارد کنید.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const res = await axios.post("/api/users/login", {
        email,
        password,
      });
      console.log("✅ Login success:", res.data);
    } catch (err) {
      setError(err.response?.data?.message || "ورود ناموفق بود.");
      console.error("❌ Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen justify-between bg-[#0f0f10]">
      <aside
        className={`fixed top-0 right-0 h-screen ${sidebarExpanded ? "w-1/5" : "w-18"}`}>
        <SidebarLayout expanded={sidebarExpanded} />
      </aside>
      <form onSubmit={handleSubmit} className="m-10 mr-25">
        <h1 className="mb-6 text-2xl font-bold text-white">ورود</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>} {/* ✅ Error */}

        <div className="mb-6">
          <Input
            id="loginEmail"
            type="email"
            label="ایمیل"
            placeholder="ایمیل خود را وارد نمایید"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Input
            className="w-md"
            id="loginPassword"
            type="password"
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد نمایید"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          className="mt-6 mb-6 w-16 cursor-pointer rounded-lg bg-[#DB2777] p-3"
          disabled={loading}
        >
          {loading ? "در حال ورود..." : "ورود"}
        </Button>

        <div className="flex">
          <p>عضو نیستید؟</p>
          <a href="#" className="mr-2.5 text-[#DB2777]">
            ثبت نام
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
