import { useState } from "react";
import { useCartStore } from "../stores/use-cart-store";
import StepButton from "../components/shoppingProgress/StepButton";
import StepLine from "../components/shoppingProgress/StepLine";
import ShopSummary from "../components/shoppingProgress/ShopSummary";
import ShopAddress from "../components/shoppingProgress/ShopAddress";
import { Link } from "react-router";

const UserShoppingProgressPage = () => {
  // !NOTE: remove this line when _id global state is implemented
  const _id = "null";

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [step, setStep] = useState(() => (_id ? 2 : 1));
  const cart = useCartStore(({ cart }) => cart);

  const handleSubmitAddress = () => {
    setStep(3);
  };

  return (
    <section className="flex h-full flex-col items-center justify-center gap-10">
      <div className="flex w-2/5 items-center justify-center gap-4">
        <StepButton
          disabled={Boolean(_id!)}
          onClick={() => setStep(1)}
          active={step >= 1}
        >
          ورود
        </StepButton>
        <StepLine active={step >= 2} />
        <StepButton
          disabled={!_id}
          onClick={() => setStep(2)}
          active={step >= 2}
        >
          اطلاعات تحویل
        </StepButton>
        <StepLine active={step >= 3} />
        <StepButton
          disabled={!_id}
          onClick={() => setStep(3)}
          active={step >= 3}
        >
          خلاصه خرید
        </StepButton>
      </div>

      {/* main part */}
      {step === 1 && (
        <div className="flex flex-col items-center gap-5">
          <p>ابتدا باید وارد حساب خود شوید.</p>
          <div className="flex gap-3">
            <Link className="btn bg-primaryPink" to="/login">
              ورود
            </Link>
            <Link className="btn bg-primaryPink" to="/register">
              ثبت نام
            </Link>
          </div>
        </div>
      )}
      {step === 2 && (
        <ShopAddress
          address={address}
          city={city}
          country={country}
          postalCode={postalCode}
          paymentMethod={paymentMethod}
          onAddressChange={setAddress}
          onCityChange={setCity}
          onCountryChange={setCountry}
          onPostalCodeChange={setPostalCode}
          onPaymentMethodChange={setPaymentMethod}
          onSubmit={handleSubmitAddress}
        />
      )}
      {step === 3 && (
        <ShopSummary
          cart={cart}
          shippingAddress={{ address, city, postalCode }}
          paymentMethod={paymentMethod}
        />
      )}
    </section>
  );
};

export default UserShoppingProgressPage;
