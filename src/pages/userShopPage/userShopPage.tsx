import ProductLayoutFull from "../../layouts/ProductLayoutFull";
import UserShopSidebar from "./userShopSidebar";
import {product} from "../../assets/testData"

 

const UserShopPage = () => {
    return <div className={`mr-20 ml-20 mt-5 flex gap-[24px]`}>
        <UserShopSidebar/>
        <ProductLayoutFull product={product}/>
        <ProductLayoutFull product={product}/>
        

    </div>
}

export default UserShopPage;