import React, {FC} from "react";
import styles from "./HomePage.module.scss";
import Drawer from "../../borders/drawer/Drawer";

interface HomePageProps {currentPage: string}

const HomePage: FC<HomePageProps> = ({currentPage}) => {

    return (
        <>
            <Drawer currentPage={currentPage}/>
        </>
        )

}

export default HomePage;