import style from './ContentPanel.module.scss';
import React, {FC, useEffect, useState} from 'react';

//panels
import ControlPanelMain from "./sub/controlPanel/main/ControlPanelMain";
import DashboardPanel from "./sub/controlPanel/dashboard/DashboardPanel";
import PanelSection from "./utils/PanelSection";
import WorkingOnPanel from "./sub/working/WorkingOnPanel";

interface ContentPanelProps {
    currentPage: string
}

const ContentPanel:FC<ContentPanelProps> = ({currentPage}) => {
    const [panel, setPanel] = useState(<ControlPanelMain/>);

    useEffect(() => {
        switch (currentPage.toLowerCase()) {
            case "controlpanel":
                setPanel(<ControlPanelMain/>);
                break;
            case "controlpanel/dashboard":
                setPanel(<DashboardPanel/>);
                break;
            default:
                setPanel(<WorkingOnPanel/>);
                break;
        }
    }, [currentPage]);

    return (
        <div className={style.panelModule}>
            <PanelSection page={currentPage}/>
            {panel}
        </div>
    );
};

export default ContentPanel;