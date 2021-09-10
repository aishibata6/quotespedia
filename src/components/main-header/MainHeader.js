import {NavLink} from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Quotespedia</div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/all-quotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/add-a-quote">
              Add A Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
