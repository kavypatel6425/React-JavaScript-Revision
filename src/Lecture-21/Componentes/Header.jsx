import "../Styles/layout.css"

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h2>NovaTech</h2>
        </div>

        <div className="header-right">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn">🔔</button>

          <div className="profile">
            <div className="avatar">KP</div>

            <div>
              <h4>Kavy Patel</h4>
              <span>Developer</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;