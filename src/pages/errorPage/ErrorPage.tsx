import {FC} from "react";
import styles from "./ErrorPage.module.scss";

import errors from "./errors.json";

type ErrorPageProps = { errorCode: number }

const ErrorPage: FC<ErrorPageProps> = ({errorCode}) => {
    //* ERROR CODES *//
    // 404 - Page Not Found
    // 500 - Internal Server Error
    // 0 - Unknown Error
    if(errorCode === null || errorCode === undefined) errorCode = errors["default"];

    let errorCodeStr : string = errorCode.toString()
    let error: object = errors[errorCodeStr][0]

    console.log(error)

    document.title = "CoralMC - " + error["title"];

    return (
        <div className={styles.errorBox}>
            <div className={styles.title}>
                {error["name"]}
            </div>
            <div className={styles.description}>
                Errore {errorCodeStr}
            </div>
            <div className={styles.description}>
                {error["description"]}
            </div>
        </div>
    );
}

export default ErrorPage;