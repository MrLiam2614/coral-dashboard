import React from "react";
import styles from './UserPayment.module.scss'

class UserPayment {
    paymentID: number;
    username: string;
    date: Date;
    amount: number;
    currency: string;
    status: string;
    statusValue: number;

    months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    statuses: string[] = ["completed", "inprogress", "pending"];

    constructor(id: number, username: string, date: string, amount: number, currency: string, status: string) {
        this.paymentID = id;
        this.username = username;
        this.amount = amount;
        this.currency = currency;
        this.status = status;

        //Status value for sorting
        this.statusValue = this.statuses.indexOf(status.toLowerCase());

        //Date received in format YYYY-MM-DDTHH:MM:SS
        this.date = new Date(date);
    }

    formatDate(): string {
        let day: number = this.date.getDate();
        let month: string = this.months[this.date.getMonth() - 1];
        let year: number = this.date.getFullYear();
        let hours: number = this.date.getHours();
        let minutes: number = this.date.getMinutes();
        let seconds: number = this.date.getSeconds();

        return `${month}, ${day}, ${year} ${hours}:${minutes}:${seconds}`;
    }

    statusImage() {
        let status: string = this.status.toLowerCase();
        switch (status) {
            case "completed":
                return (<span className={styles.completed}>Completed</span>);
                break;
            case "inprogress":
                return (<span className={styles.inProgress}>In progress</span>);
                break;
            case "pending":
            default:
                return (<span className={styles.pending}>Pending</span>);
                break;
        }
    }

    render() {
        return (
            <tr>
                <td>{this.paymentID}</td>
                <td>{this.username}</td>
                <td>{this.formatDate()}</td>
                <td>{this.amount}{this.currency}</td>
                <td>{this.statusImage()}</td>
            </tr>
        )
    }
}

export default UserPayment;