import {FC} from "react";
import styles from "./Drawer.module.scss";

import content from "./DrawerContent.json";

import DrawerDropdownButton from "component/drawer/DrawerDropdownButton";
import DrawerButton from "component/drawer/DrawerButton";
import DrawerFinalButton from "component/drawer/DrawerFinalButton";
import DrawerSeparator from "../../component/drawer/DrawerSeparator";
import React from "react";


interface DrawerProps { currentPage: string }

const Drawer: FC<DrawerProps> = ({currentPage}) => {
    let sectionOneButtons: DrawerButton[] = [];

    let buildDrawerElement = (type: string, element: object, active : boolean = false) => {
        switch (type) {
            case "separator":
                let drawerSeparator: DrawerButton = new DrawerSeparator();
                return drawerSeparator;
            case "dropdown":
                let drawerDropdownButton: DrawerButton = new DrawerDropdownButton(element["icon"], element["title"]);
                let drawerDropdownButtonElements: object = element["items"];
                for (let i = 0; i < Object.keys(drawerDropdownButtonElements).length; i++) {
                    drawerDropdownButton.addSubButton(buildDrawerElement("button", drawerDropdownButtonElements[i]));
                }
                drawerDropdownButton.active = active;
                return drawerDropdownButton
            case "button":
                let drawerButton: DrawerButton = new DrawerFinalButton(element["icon"], element["title"], element["redirect"]);
                drawerButton.active = active;
                return drawerButton;
            default:
                console.error("Invalid drawer type: " + type)
                return undefined;

        }
    }

    let loadDrawers = () => {
        for (let i = 0; i < Object.keys(content).length; i++) {
            //try messo qui per evitare che un errore in un elemento drawer blocchi l'intero drawer dal venire caricato
            try {
                let drawerString: string = Object.keys(content)[i];
                let drawerElement: object = content[drawerString];

                let drawerType: string = drawerElement["type"].toLowerCase();
                let drawerButton: DrawerButton = buildDrawerElement(drawerType, drawerElement, drawerString === currentPage);
                if (drawerButton !== undefined) {
                    sectionOneButtons.push(drawerButton);
                }
            } catch (e) {
                console.error("Errore nella configurazione degli elementi drawer!\n" + e);
            }
        }
    }

    loadDrawers();

    return (
        <div className={styles.mainDrawer}>
            <span className={styles.title}>CoralMC</span>
            {sectionOneButtons.map((button) => button.render())}
        </div>
    );


}

export default Drawer;