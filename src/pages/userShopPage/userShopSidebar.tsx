import Input from "../general/Input"


const UserShopSidebar = () => {
    return <div className={`w-[264px] h-[810px] bg-[#151515] p-2 flex flex-col gap-[28px] ml-[40px]`}>
        <p className={`w-full bg-[#000000] text-[#FFFFFF] font-[400] text-center rounded-xl text-[16px] pt-[8px] pb-[8px]
`}>فیلتر برند</p>
        <div className={`flex flex-col gap-[16px] pr-[20px]`}>
            <div className={`flex gap-[8px]`}>
        <input className={``} type="checkbox" name="Apple" id="Apple"/>
        <label htmlFor="Apple" className={`font-[Segoe UI] font-[400] text-[14px] text-[#FFFFFF]`}>Apple</label>
        </div>
        <div className={`flex gap-[8px]`}>
        <input type="checkbox" name="Microsoft" id="Microsoft"/>
        <label htmlFor="Microsoft" className={`font-[Segoe UI] font-[400] text-[14px] text-[#FFFFFF]`}>Microsoft</label>
        </div>
        </div>
        <p className={`w-full bg-[#000000] text-[#FFFFFF] font-[400] text-center rounded-xl text-[16px] pt-[8px] pb-[8px]`}>فیلتر قیمت</p>
        <div className={`pl-[20px] pr-[20px]`}>
        <Input className={`pt-[10px] pb-[10px] pr-[13px] pl-[13px] rounded-[8px] border-[1px] border-solid border-[#F4F6F8] bg-[#FFFFFF] text-[#9CA3AF]`} id='price' placeholder='قیمت را وارد نمایید'/>
        </div>
        <button className={`ml-[20px] mr-[20px] border-[1px] border-solid border-[#9CA3AF] rounded-[4px] pt-[2px] pb-[2px] text-[#FFFFFF] font-[400] text-[16px] text-center`}>حذف فیلترها</button>
    </div>

}

export default UserShopSidebar;

