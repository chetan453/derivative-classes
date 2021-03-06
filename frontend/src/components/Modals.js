import React from 'react'
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    backgroundColor: "#FFF",
    transform: "translate(-50%,-50%)",
    zIndex: "1000",
    padding: "50px",
    borderRadius: "5px"
}

const OVERLAY_STYLE = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: "1000"
}

function Modals({ open, children }) {
    if (!open) {
        return null;
    }
    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLE} />
            <div style={MODAL_STYLES}>
                {children}
            </div>
        </>,
        document.getElementById("modal")
    )
}

export default Modals
