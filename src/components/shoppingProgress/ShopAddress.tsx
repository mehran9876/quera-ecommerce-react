// import { useState } from "react";
import { type Dispatch, type SetStateAction } from "react";
import Button from "../general/button";
import Input from "../general/Input";

interface ShopAddressProps {
  onSubmit: () => void;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  paymentMethod: string;
  onAddressChange: Dispatch<SetStateAction<string>>;
  onCityChange: Dispatch<SetStateAction<string>>;
  onCountryChange: Dispatch<SetStateAction<string>>;
  onPostalCodeChange: Dispatch<SetStateAction<string>>;
  onPaymentMethodChange: Dispatch<SetStateAction<string>>;
}

const ShopAddress = ({
  address,
  city,
  country,
  postalCode,
  paymentMethod,
  onAddressChange,
  onCityChange,
  onCountryChange,
  onPostalCodeChange,
  onPaymentMethodChange,
  onSubmit,
}: ShopAddressProps) => {
  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onPaymentMethodChange(e.target.value);
  };

  return (
    <div className="w-1/2">
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <h4 className="text-2xl">آدرس دریافت</h4>
        <Input
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          id="address"
          label="آدرس"
          placeholder="آدرس را وارد نمایید"
        />
        <Input
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          id="city"
          label="شهر"
          placeholder="شهر را وارد نمایید"
        />
        <Input
          value={country}
          onChange={(e) => onCountryChange(e.target.value)}
          id="country"
          label="کشور"
          placeholder="کشور را وارد نمایید"
        />
        <Input
          value={postalCode}
          onChange={(e) => onPostalCodeChange(e.target.value)}
          id="postalCode"
          label="کدپستی"
          placeholder="کدپستی را وارد نمایید"
        />
        <h5 className="text-placeholder">روش پرداخت</h5>
        <div className="flex gap-8">
          <div className="flex gap-2">
            <input
              type="radio"
              id="pasargad"
              name="payment"
              value="pasargad"
              checked={paymentMethod === "pasargad"}
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="pasargad">درگاه پرداخت پاسارگاد</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="saman"
              name="payment"
              value="saman"
              checked={paymentMethod === "saman"}
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="saman">درگاه پرداخت سامان</label>
          </div>
        </div>
        <Button type="submit">ادامه</Button>
      </form>
    </div>
  );
};

export default ShopAddress;
