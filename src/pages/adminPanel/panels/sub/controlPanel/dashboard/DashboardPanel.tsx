import styles from './DashboardPanel.module.scss'
import mainStyle from '../ControlPanelMain.module.scss';
import React, {FC, useEffect, useState} from "react";

import UserPayment from "component/dashboard/UserPayment";

//Import fake back-end response
import monthPayments from 'apiResponseSimulation/MonthPayments.json';

const DashboardPanel:FC = () => {
    let payments: UserPayment[] = React.useMemo(() => [], []);
    const [sortConfig, setSortConfig] = useState({key: "paymentID", direction: "ascending"});

    const sortedData = React.useMemo(() => {
        let sortableData = payments;
        if (sortConfig !== null) {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [payments, sortConfig]);

    function loadSortImage(key:string, direction:string) {
        let selected: HTMLElement = document.getElementById(key)!;
        let all: HTMLElement[] = Array.from(document.getElementById("paymentsHead").querySelectorAll("th"));

        for (let i = 0; i < all.length; i++) {
            all[i].classList.remove(styles.selected);
            all[i].classList.remove(styles.descending);
        }

        selected.classList.add(styles.selected);
        if (direction === "descending") {
            selected.classList.add(styles.descending);
        }else{
            selected.classList.remove(styles.descending);
        }

    }

    const requestSort = (key:string) => {
        let direction = 'descending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'descending') {
            direction = 'ascending';
        }
        setSortConfig({ key, direction });
        loadSortImage(key, direction);
    };

    function loadPayments() {
        let content: object[] = monthPayments["content"];
        for (let i = 0; i < content.length; i++) {
            let payment: object = content[i];
            let id: number = payment["id"];
            let username: string = payment["user"]["username"];
            let date: string = payment["date"];
            let amount: number = payment["amount"];
            let currency: string = payment["currency"];
            let status: string = payment["status"];

            let userPayment: UserPayment = new UserPayment(id, username, date, amount, currency, status);
            payments.push(userPayment);
        }
    }

    useEffect(() => {
        loadPayments();
        requestSort("paymentID")
    },[])

    return(
        <div className={mainStyle.content + ' ' + styles.content}>
            <div className={styles.tinyBox}>a</div>
            <div className={styles.tinyBox}>b</div>
            <div className={styles.tinyBox}>c</div>
            <div className={styles.tinyBox}>d</div>
            <table className={styles.paymentTable}>
                <thead id={"paymentsHead"}>
                <tr>
                    <th onClick={() => requestSort("paymentID")} id={"paymentID"} >ID </th>
                    <th onClick={() => requestSort("username")} id={"username"}>USERNAME</th>
                    <th onClick={() => requestSort("date")} id={"date"}>DATE & TIME</th>
                    <th onClick={() => requestSort("amount")} id={"amount"}>AMOUNT</th>
                    <th onClick={() => requestSort("statusValue")} id={"statusValue"}>STATUS</th>
                </tr>
                </thead>
                <tbody>
                {sortedData.map((payment: UserPayment) => {
                    return payment.render();
                })}
                </tbody>
            </table>
            <div className={styles.bigBox}>a</div>
        </div>
    )
}

export default DashboardPanel;