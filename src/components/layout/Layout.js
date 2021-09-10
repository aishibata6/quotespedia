import {Fragment} from "react";
import MainHeader from "../main-header/MainHeader";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
