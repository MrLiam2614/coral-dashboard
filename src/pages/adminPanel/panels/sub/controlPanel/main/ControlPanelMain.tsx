import styles from '../ControlPanelMain.module.scss';
import React, { FC } from 'react';
import Redirect from "utils/Redirect";

const ControlPanelMain:FC = () => {
    return(
        <div className={styles.content}>
            <h1>CoralMC</h1>
            <button onClick={(e) => Redirect.open(e, "#controlpanel/dashboard")}>Dashboard</button>
        </div>
    )
}

export default ControlPanelMain;