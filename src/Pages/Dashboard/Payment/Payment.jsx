import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../Hooks/useCart";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// TODO: add publishbale key (pk)
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_KEY);

const Payment = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const { user } = UseAuth();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
  // console.log(cart);

  const handleCreatePayment = async () => {
    const payment = {
      email: user?.email,
      price: totalPrice,
      trxId: "",
      date: new Date(),
      cardIds: cart.map((item) => item._id),
      menuItemsIds: cart.map((item) => item._id),
      status: "pending",
    };

    const res = await axiosSecure.post("/create-ssl-payment", payment);
    console.log(res);
    if (res?.data?.gatewayUrl) {
      window.location.replace(res?.data?.gatewayUrl);
    }
  };

  return (
    <div>
      <SectionTitle heading={"payment"} subHeading={"Pay Now"}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
        {/* ssl Commerze  */}
        <div>
          <SectionTitle
            heading={"SSL Commerze"}
            subHeading={"Pay now"}
          ></SectionTitle>
          <div>
            <input
              type="text"
              placeholder="username@site.com"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered join-item"
            />
            <button
              onClick={handleCreatePayment}
              className="btn btn-primary join-item"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
