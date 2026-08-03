import { Link } from "react-router-dom";

function BankingNavbar() {
    return (
        <div>
            <h2>Bank Navbar</h2>
            <nav>
                <Link to="/bank-dashboard">Dashboard</Link> |{" "}
                <Link to="/bank-accounts">Accounts</Link> |{" "}
                <Link to="/bank-transactions">Transactions</Link> |{" "}
                <Link to="/bank-transfer-money">Transfer Money</Link> |{" "}
                <Link to="/bank-profile">Profile</Link>
            </nav>
        </div>
    );
}

export default BankingNavbar;