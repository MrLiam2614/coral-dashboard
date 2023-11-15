import styles from '../DashboardPanel.module.scss'
import React, {FC, useEffect, useState} from "react";

//Import fake back-end response
import PaymentsInfo from 'apiResponseSimulation/PaymentsInfo.json';

interface SalesProps {
    sizeClass: string;
    time: string;
    type: string;
    image: string;
}

const SalesBox: FC<SalesProps> = ({sizeClass, time, type, image}) => {
    let [value, setValue] = useState(0.0);
    let [currency, setCurrency] = useState("€");
    let [text, setText] = useState("Sales");

    function calcData() {
        let data = PaymentsInfo["content"][0];
        let requested: string = type.toLowerCase();
        if (requested !== "value" && requested !== "average") {
            requested = "value";
        }
        type = requested;
        if(type === "value"){
            setText("Total in Sales");
        }else{
            setText("Average Payment");
        }

        switch (time.toLowerCase()) {
            case "month":
                setValue(data["monthly"][type]);
                setCurrency(data["monthly"]["currency"]);
                break;
            default:
                setValue(data["allTime"][type]);
                setCurrency(data["allTime"]["currency"]);
                break;
        }
    }

    useEffect(() => {
        calcData();
    }, []);

    return (
        <div className={sizeClass}>
            <div className={styles.staffUser}>
                <img src={image}
                     alt={text + ' ' + time}/>
                <span className={styles.title}>{text}</span>
                <div className={styles.breakFlex}/>
                <span className={styles.value}>{type === "value" ? value.toFixed(3) : value.toFixed(0)} {currency}</span>
                <div className={styles.breakFlex}/>
                <span className={styles.subTitle}>{time.toLowerCase() === "month" ? "Current Month" : "All Time"}</span>
            </div>
        </div>
    )

}

export default SalesBox;