import { useEffect, useState } from "react";
import type { ProductType } from "../types/productType";
import AdminProductCard from "../components/admin/AdminProductCard";
import axiosInstance from "../utils/axios";

const AdminAllProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/api/products/allproducts");
        setProducts(res.data);
      } catch (err) {
        console.error("خطا در دریافت محصولات:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {loading ? (
        <p>در حال بارگذاری...</p>
      ) : products.length > 0 ? (
        products.map((product) => (
          <AdminProductCard key={product._id} product={product} />
        ))
      ) : (
        <p>محصولی یافت نشد</p>
      )}
    </div>
  );
};

export default AdminAllProductsPage;
