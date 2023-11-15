import React from "react";
import styles from "./Drawer.module.scss";

class DrawerButton{
    image: string;
    name: string;
    active: boolean;

    constructor(image: string, name: string){
        this.image = image;
        this.name = name;
        this.active = false;
    }

    addSubButton(drawerButton: DrawerButton){}

    render(){
        return (<> </>)
    }
}

export default DrawerButton;