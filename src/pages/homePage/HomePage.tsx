import React, {FC} from "react";
import styles from "./HomePage.module.scss";
import Drawer from "../../borders/drawer/Drawer";

const HomePage: FC = () => {

    return (
        <>
            <Drawer currentPage={"controlpanel"}/>
        </>
        )

}

export default HomePage;