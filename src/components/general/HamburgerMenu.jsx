import React, { useState } from "react";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/closeIcon.png";
import hamburgerIcon from "../../assets/hamburgerIcon.png";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg"
        >
          <img src={hamburgerIcon} alt="menu" className="w-8 h-8" />
        </button>
      )}

      {isOpen && (
        <div className="absolute top-8 left-[-140px] z-50 bg-[#151515] border border-[#3F4043] rounded-lg w-40 text-white p-3">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-4 -right-4 bg-[#151515] p-1 border border-[#3F4043] rounded-lg"
          >
            <img src={closeIcon} alt="close" className="w-5 h-5" />
          </button>

          <ul className="flex flex-col gap-4 text-right">
            <li className="rounded px-2 py-2 hover:bg-[#DB277714] hover:text-[#DB2777]">
              <Link to="/admin/dashboard">داشبورد</Link>
            </li>
            <li className="rounded px-2 py-2 hover:bg-[#DB277714] hover:text-[#DB2777]">
              <Link to="/admin/products/create">محصول جدید</Link>
            </li>
            <li className="rounded px-2 py-2 hover:bg-[#DB277714] hover:text-[#DB2777]">
              <Link to="/admin/users">مدیریت کاربران</Link>
            </li>
            <li className="rounded px-2 py-2 hover:bg-[#DB277714] hover:text-[#DB2777]">
              <Link to="/admin/orders">سفارشات</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}