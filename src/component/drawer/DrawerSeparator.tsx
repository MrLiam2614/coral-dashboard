import {FC} from "react";
import DrawerButton from "component/drawer/DrawerButton";
import React from "react";

class DrawerSeparator extends DrawerButton {
    component: FC;

    constructor() {
        super(undefined, undefined);
    }

    render() {
        return (
            <hr/>
        );
    }
}

export default DrawerSeparator;