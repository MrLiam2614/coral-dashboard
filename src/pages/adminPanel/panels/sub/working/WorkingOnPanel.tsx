import React, {FC} from "react";

import mainStyle from '../controlPanel/ControlPanelMain.module.scss';

const WorkingOnPanel: FC = () => {
    return (
        <div className={mainStyle.content}>
            <h1>CoralMC</h1>
            <img src={"https://static.mrliam2614.net/coralmc/images/corallogo.png"}  alt={"logo CoralMC"}/>
            <h3>Work in Progress</h3>
            <span>Il Team di CoralMC sta ancora lavorando alla realizzazione di questa pagina.<br/>Fino ad allora non potrà essere utilizzata!</span>
        </div>
    )
}

export default WorkingOnPanel;