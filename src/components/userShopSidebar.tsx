import { useSearchParams } from "react-router-dom";
import Checkbox from "./general/Checkbox";
import Input from "./general/Input";
import { SidebarHeading } from "./SidebarHeading";
import axiosInstance from "../utils/axios";
import type { CategoryType } from "../types/categoryType";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const UserShopSidebar = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      axiosInstance
        .get<CategoryType[]>(`/api/category/categories`)
        .then((res) => res.data),
  });
  const [filters, setFilters] = useSearchParams();
  const localParams = new URLSearchParams(filters);
  const [min, setMin] = useState(filters.get("minPrice") || "");
  const [max, setMax] = useState(filters.get("maxPrice") || "");

  const handleCategoryChange = (id: string) => {
    setFilters((prev) => {
      const params = new URLSearchParams(prev);
      if (params.has("categories", id)) params.delete("categories", id);
      else params.append("categories", id);
      return params;
    });
  };
  const handlePriceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilters(() => {
      const params = new URLSearchParams(localParams);
      params.set("minPrice", min || "");
      params.set("maxPrice", max || "");
      return params;
    });
  };

  return (
    <div
      className={`bg-bgFilterMenu ml-[40px] flex h-max w-[264px] flex-col gap-[28px] rounded-sm px-2 py-8`}
    >
      <SidebarHeading>فیلتر برند</SidebarHeading>
      <div className={`flex flex-col gap-4 pr-5`}>
        {isLoading && <p>loading...</p>}
        {isError && <p>error</p>}
        {!isError &&
          !isLoading &&
          categories?.map((category: CategoryType) => (
            <Checkbox
              onChange={handleCategoryChange}
              key={category._id}
              id={category._id}
              label={category.name}
              checked={filters.getAll("categories")?.includes(category._id)}
            />
          ))}
      </div>
      <SidebarHeading>فیلتر قیمت</SidebarHeading>
      <div className={`pr-[20px] pl-[20px]`}>
        <form
          onSubmit={(e) => handlePriceSubmit(e)}
          className="flex flex-col items-center gap-3"
        >
          <Input
            type="number"
            placeholder="min price"
            className={`input`}
            value={min}
            onChange={(e) => setMin(e.target.value)}
            id="price-min"
          />
          <Input
            type="number"
            placeholder="max price"
            className={`input`}
            value={max}
            onChange={(e) => setMax(e.target.value)}
            id="price-max"
          />
          <button
            type="submit"
            className={`btn bg-primaryPink mx-5 w-full rounded-sm border px-0.5 py-0.5 text-center text-white`}
          >
            جستجو
          </button>
        </form>
      </div>

      <button
        className={`btn bg-primaryPink mx-5 rounded-sm border px-0.5 py-0.5 text-center text-white`}
        onClick={() => {
          setFilters({});
        }}
      >
        حذف فیلترها
      </button>
    </div>
  );
};

export default UserShopSidebar;
