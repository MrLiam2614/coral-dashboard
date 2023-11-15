import {FC} from "react";
import DrawerButton from "component/drawer/DrawerButton";
import styles from "./DrawerButton.module.scss";
import Redirect from "utils/Redirect";
import React from "react";

class DrawerFinalButton extends DrawerButton{
    link: string;

    constructor(image: string, name: string, link: string){
        super(image, name);
        this.link = link;
    }

    render(){
        let activeDrawer : any = this.active ? styles.active : '';
        return (
            <div className={activeDrawer + ' ' + styles.buttonElement} onClick={(e) => {Redirect.open(e, this.link)}}>
                <img src={this.image} alt={this.name}/>
                <div className={styles.buttonText}>
                    {this.name}
                </div>
            </div>
        );
    }
}

export default DrawerFinalButton;