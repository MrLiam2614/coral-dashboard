import React from "react";
import styles from "./DrawerButton.module.scss";
import DrawerButton from "component/drawer/DrawerButton";

class DrawerDropdownButton extends DrawerButton {
    subButtons: DrawerButton[];
    ruid: string;

    constructor(image: string, name: string) {
        super(image, name);
        this.subButtons = [];
        this.ruid = Math.random().toString(36).substring(7);
    }

    addSubButton(button: DrawerButton) {
        this.subButtons.push(button);
    }

    disableOthers = () => {
        let elements = document.getElementsByClassName(styles.show);
        let i: number = 0;
        let x: number = 0;
        for (i = 0; i < elements.length; i++) {
            let id: string = elements[i].id;
            if (id === this.ruid)
                continue;

            document.getElementById(id).classList.remove(styles.show);
            document.getElementById("main_" + id).classList.remove(styles.showParent);
        }
    }
    switchDropdown = () => {
        this.disableOthers();

        let element = document.getElementById(this.ruid);
        let mainElement = document.getElementById("main_" + this.ruid);
        if (element.classList.contains(styles.show)) {
            element.classList.remove(styles.show);
            mainElement.classList.remove(styles.showParent);
        } else {
            element.classList.add(styles.show);
            mainElement.classList.add(styles.showParent);
        }
    }

    render() {

        let activeDrawer : any = this.active ? styles.active : '';
        return (
            <>
                <div className={styles.dropdownElement}>
                    <div className={activeDrawer + ' ' + styles.buttonElement} onClick={this.switchDropdown} id={"main_" + this.ruid}>
                        <img src={this.image} alt={this.name}/>
                        <div className={styles.buttonText}>
                            {this.name} <i className="fa fa-caret-down"></i>
                        </div>
                    </div>
                    <div className={styles.dropdownContent} id={this.ruid}>
                        {this.subButtons.map((button) => button.render())}
                    </div>
                </div>
            </>
        );
    }
}

export default DrawerDropdownButton;