import ProductSlider from "./components/ProductSlider";
import ProductLayoutCompact from "./components/general/ProductLayoutCompact";
import Button from "./components/general/button";
import type { ProductType } from "./assets/testData";

const mockProducts: { _id: number; name: string }[] = [
  { _id: 1, name: "Apple iPad Pro 12.9-inch" },
  { _id: 2, name: "Apple iPad Pro 12.9-inch" },
  { _id: 3, name: "Apple iPad Pro 12.9-inch" },
  { _id: 4, name: "Apple iPad Pro 12.9-inch" },
  { _id: 5, name: "Apple iPad Pro 12.9-inch" },
  { _id: 6, name: "Apple iPad Pro 12.9-inch" },
];
const dummyProducts: ProductType[] = [
  {
    _id: "1",
    title: "Apple iPhone 14 Pro",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JMP1RRgfGZbb2b62sXX72zC7zylKZHQC1w&s",
    price: 100000,
    rating: "5",
    stock: "10",
    count: "52",
    brand: "اپل",
    lastUpdate: "چند لحظه قبل",
    comments: "4320",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است  صفحه نمایش با فناوری ProMotion, تراشه A16 Bionic و  سیستم دوربین سه گانه...  ",
  },
  {
    _id: "2",
    title: "Apple iPhone 14 Pro",
    image:
      "data:image/jpeg;base64,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",
    price: "20000",
    rating: "5",
    stock: "10",
    count: "52",
    brand: "اپل",
    lastUpdate: "چند لحظه قبل",
    comments: "4320",
    description:
      "آیفون 14 پرو دارای صفحه نمایش 6.1 اینچی Super Retina XDR است  صفحه نمایش با فناوری ProMotion, تراشه A16 Bionic و  سیستم دوربین سه گانه...  ",
  },
];

const App = () => {
  return (
    <div className="flex flex-col p-6">
      <div className="mb-8 flex flex-row-reverse gap-20">
        <ProductSlider products={dummyProducts} />
        <div className="relative grid grid-cols-2 gap-4">
          {mockProducts.slice(0, 4).map((product) => (
            <div key={product._id} className="relative">
              <ProductLayoutCompact
                productName={product.name}
                size="small"
                product={product}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-0">
          <h2 className="text-xl">محصولات ویژه</h2>
          <div className="cursor-pointer">
            <Button>فروشگاه</Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-14">
          {mockProducts.slice(0, 4).map((product) => (
            <div key={product._id} className="relative">
              <ProductLayoutCompact
                productName={product.name}
                size="small"
                image=""
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-14">
          <div className="col-span-1" />
          {mockProducts.slice(4, 6).map((product) => (
            <div key={product._id} className="relative">
              <ProductLayoutCompact
                productName={product.name}
                size="small"
                image=""
              />
            </div>
          ))}
          <div className="col-span-1" />
        </div>
      </div>
    </div>
  );
};

export default App;
