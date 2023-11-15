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
}

export default DrawerButton;