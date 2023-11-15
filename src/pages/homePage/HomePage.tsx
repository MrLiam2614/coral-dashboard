import React, {FC} from "react";
import styles from "./HomePage.module.scss";
import Redirect from "../../utils/Redirect";

const HomePage: FC = () => {

    return (
        <div className={styles.homeContent}>
            <h1>CoralMC</h1>
            <button onClick={(e) => Redirect.open(e, "/panel")}>Pannello Administratore</button>
        </div>
        )

}

export default HomePage;