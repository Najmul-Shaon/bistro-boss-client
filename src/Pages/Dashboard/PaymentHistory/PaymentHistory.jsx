import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h3>Total Payments: {payments?.length}</h3>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Price</th>
              <th>TrxID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, i) => (
              <tr key={payment._id}>
                <th>{i + 1}</th>
                <td className="text-right">${payment.price}</td>
                <td>{payment.trxId}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
