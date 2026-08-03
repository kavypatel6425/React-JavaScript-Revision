import { useNavigate } from "react-router-dom";

function Lec11_AccountList() {
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

  return (
    <div>
      <h1>Accounts List</h1>

      {accounts.map((account) => (
        <div key={account.id}>
          <h3>Account No: {account.accountNumber}</h3>

          <button onClick={() => navigate(`/account/${account.id}`)}>
            View Details
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Lec11_AccountList;