import React from "react";

function open(clickEvent: React.MouseEvent, url: string){
    if(clickEvent.ctrlKey){
        window.open(url, "_blank");
    }else{
        window.location.href = url;
    }
}
export default {
    open
}