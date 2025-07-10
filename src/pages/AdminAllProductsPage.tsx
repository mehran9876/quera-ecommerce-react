import React, { useEffect, useState } from 'react';
import { ProductType } from "../types/productType";
import axios from '../utils/axios'; 
import AdminProductCard from '../components/admin/AdminProductCard';
import SidebarLayout from '../layouts/Sidebar/SidebarLayout';

const AdminAllProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct22s = async () => {
      try {
        const res = await axios.get('/products');
        setProducts(res.data.products);
      } catch (err) {
        console.error('خطا در دریافت محصولات:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
  return (
    <SidebarLayout title="محصولات">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </SidebarLayout>
  );
};

export default AdminAllProductsPage;