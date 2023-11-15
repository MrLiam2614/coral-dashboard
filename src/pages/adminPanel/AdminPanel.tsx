import React, {FC, useEffect, useState} from "react";
import styles from "./AdminPanel.module.scss";
import Drawer from "borders/drawer/Drawer";
import {useLocation} from "react-router-dom";
import ContentPanel from "./panels/ContentPanel";

const AdminPanel: FC = () => {
    const [drawer, setDrawer] = useState(<Drawer currentPage={"controlpanel"}/>)
    const [contentPanel, setContentPanel] = useState(<ContentPanel currentPage={"controlpanel"}/>)

    const location = useLocation();

    useEffect(() => {
        let hash:string = location.hash;
        if(hash === undefined || hash === null || hash === "") {
            hash = "#controlpanel";
        }
        hash = hash.split("#")[1];

        setDrawer(<Drawer currentPage={hash}/>)
        setContentPanel(<ContentPanel currentPage={hash}/>)
    }, [location]);

    return (
        <div className={styles.panelFrame}>
            {drawer}
            {contentPanel}
        </div>
    )

}

export default AdminPanel;