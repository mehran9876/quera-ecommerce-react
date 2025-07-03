import Input from "../../components/general/Input";

const UserShopSidebar = () => {
  return (
    <div
      className={`ml-[40px] flex h-[810px] w-[264px] flex-col gap-[28px] bg-[#151515] p-2`}
    >
      <p
        className={`w-full rounded-xl bg-[#000000] pt-[8px] pb-[8px] text-center text-[16px] font-[400] text-[#FFFFFF]`}
      >
        فیلتر برند
      </p>
      <div className={`flex flex-col gap-[16px] pr-[20px]`}>
        <div className={`flex gap-[8px]`}>
          <input className={``} type="checkbox" name="Apple" id="Apple" />
          <label
            htmlFor="Apple"
            className={`font-[Segoe UI] text-[14px] font-[400] text-[#FFFFFF]`}
          >
            Apple
          </label>
        </div>
        <div className={`flex gap-[8px]`}>
          <input type="checkbox" name="Microsoft" id="Microsoft" />
          <label
            htmlFor="Microsoft"
            className={`font-[Segoe UI] text-[14px] font-[400] text-[#FFFFFF]`}
          >
            Microsoft
          </label>
        </div>
      </div>
      <p
        className={`w-full rounded-xl bg-[#000000] pt-[8px] pb-[8px] text-center text-[16px] font-[400] text-[#FFFFFF]`}
      >
        فیلتر قیمت
      </p>
      <div className={`pr-[20px] pl-[20px]`}>
        <Input
          className={`rounded-[8px] border-[1px] border-solid border-[#F4F6F8] bg-[#FFFFFF] pt-[10px] pr-[13px] pb-[10px] pl-[13px] text-[#9CA3AF]`}
          id="price"
          placeholder="قیمت را وارد نمایید"
        />
      </div>
      <button
        className={`mr-[20px] ml-[20px] rounded-[4px] border-[1px] border-solid border-[#9CA3AF] pt-[2px] pb-[2px] text-center text-[16px] font-[400] text-[#FFFFFF]`}
      >
        حذف فیلترها
      </button>
    </div>
  );
};

export default UserShopSidebar;
