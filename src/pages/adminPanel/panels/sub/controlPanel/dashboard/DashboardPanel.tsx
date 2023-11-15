import styles from './DashboardPanel.module.scss'
import mainStyle from '../ControlPanelMain.module.scss';
import React, {FC} from "react";
import UserTableBox from "./boxes/UserTableBox";
import StaffUsers from "./boxes/StaffUsers";
import SalesBox from "./boxes/SalesBox";

const DashboardPanel:FC = () => {

    return(
        <div className={mainStyle.content + ' ' + styles.content}>
            <StaffUsers sizeClass={styles.tinyBox}/>
            <SalesBox time={"all"} type={"value"} image={"https://static.mrliam2614.net/coralmc/images/icons/money-bills-solid.svg"} sizeClass={styles.tinyBox}/>
            <SalesBox time={"month"} type={"value"} image={"https://static.mrliam2614.net/coralmc/images/icons/money-bills-solid.svg"} sizeClass={styles.tinyBox}/>
            <SalesBox time={"month"} type={"average"} image={"https://static.mrliam2614.net/coralmc/images/icons/money-bills-solid.svg"} sizeClass={styles.tinyBox}/>
            <UserTableBox/>
            <StaffUsers sizeClass={styles.bigBox}/>
        </div>
    )
}

export default DashboardPanel;