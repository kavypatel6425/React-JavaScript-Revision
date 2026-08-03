import { useNavigate, useParams } from "react-router-dom";

function Lec11_AccountDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const accounts = [
    {
      id: 1,
      accountNumber: "1001",
      holder: "Rahul Patel",
      balance: 50000,
    },
    {
      id: 2,
      accountNumber: "1002",
      holder: "Priya Shah",
      balance: 75000,
    },
    {
      id: 3,
      accountNumber: "1003",
      holder: "Amit Kumar",
      balance: 120000,
    },
  ];

  const account = accounts[id - 1];

  return (
    <div>
      <h1>Account Details</h1>

      <p><b>Account Number:</b> {account.accountNumber}</p>
      <p><b>Account Holder:</b> {account.holder}</p>
      <p><b>Balance:</b> {account.balance}</p>

      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default Lec11_AccountDetails;