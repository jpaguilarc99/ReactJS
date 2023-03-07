import React from "react";

function Foot() {
    const date = new Date().getFullYear();
    return(
        <footer>
            Copyright {date} ©
        </footer>
    )
}

export default Foot;