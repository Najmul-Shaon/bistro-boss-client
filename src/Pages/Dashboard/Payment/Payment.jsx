import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishbale key (pk)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_KEY);

const Payment = () => {
  return (
    <div>
      <SectionTitle heading={"payment"} subHeading={"Pay Now"}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
