import React, {FC} from 'react';
import styles from './PanelSection.module.scss';

import content from "config/DrawerContent.json";
import Redirect from "../../../../utils/Redirect";

interface PanelSectionProps {
    page: string
}

const PanelSection: FC<PanelSectionProps> = ({page}) => {

    let getImage = (page: string) => {
        return content[page]["icon"];
    }

    let sections: string[] = page.split("/");
    let sectionImage: string = getImage(sections[0]);
    return (
        <div className={styles.sectionBox}>
            <img src={sectionImage} alt="sectionImage"/>
            {sections.map((section, index) => {
                if (index === 0) {
                    let redirect: string = content[section]["redirect"];
                    if (redirect === undefined || redirect === null || redirect === "") {
                        return (
                            <span className={styles.mainCategory}>{content[section]["title"]}</span>
                        )
                    } else {
                        return (
                            <span className={styles.mainCategory + ' ' + styles.clickable} onClick={(e) => {
                                Redirect.open(e, content[section]["redirect"])
                            }}>{content[section]["title"]}</span>
                        )
                    }
                } else {
                    let pageName:string = section.charAt(0).toUpperCase() + section.slice(1);
                    return (
                        <>
                            <span className={styles.separator}> {'>'} </span>
                            <span className={styles.secondaryCategory}>{pageName}</span>
                        </>
                    )
                }
            })}
        </div>
    )
}

export default PanelSection;