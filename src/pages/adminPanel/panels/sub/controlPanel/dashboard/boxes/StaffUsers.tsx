import styles from '../DashboardPanel.module.scss'
import React, {FC, useEffect, useState} from "react";

//Import fake back-end response
import StaffInfo from 'apiResponseSimulation/StaffInfo.json';

interface StaffUserProps {
    sizeClass: string;
}

const StaffUsers: FC<StaffUserProps> = ({sizeClass}) => {
    let [staffCount, setStaffCount] = useState(0);

    function countUsers() {
        setStaffCount(StaffInfo["numberOfElements"]);
    }

    useEffect(() => {
        countUsers();
    }, []);

    return (
        <div className={sizeClass}>
            <div className={styles.staffUser}>
                <img src={"https://static.mrliam2614.net/coralmc/images/icons/user-group-solid.svg"}
                     alt={"staff users"}/>
                <span className={styles.title}>Staff Users</span>
                <div className={styles.breakFlex}/>
                <span className={styles.value}>{staffCount}</span>
            </div>
        </div>
    )

}

export default StaffUsers;