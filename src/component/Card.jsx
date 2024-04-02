import React from "react";
import Button from "./Button";

export default function Card(props) {
    const style = {
        width: "380px",
        backgroundColor: "#64CCC5",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%"

    }

    const styleHeader = {
        color: "#04364A",
        fontSize: "26px",
        fontWeight: "600",
        textAlign: "center"
    }

    const styleHarga = {
        color: "#FFFFFF",
        fontSize: "34px",
        fontWeight: "600",
        textAlign: "center"
    }

    const styleParagraph = {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    }

    const styleList = {
        listStyle: "disc",
        color: "#04364A",
        fontSize: "15px",
        display: "flex",
        width: "80%",
        flexDirection: "column",
        gap: "5px"
    }
    return (
        <>
            <div class="box" style={style}>
                <div style={styleParagraph}>
                    <h2 style={styleHeader}>{props.header}</h2>
                    <h1 style={styleHarga}>{props.harga}</h1>
                    <ul style={styleList}>
                        <li>{props.list1}</li>
                        <li>{props.list2}</li>
                        <li>{props.list3}</li>
                    </ul>
                </div>
                <Button name="Berlangganan" width="230px"></Button>
            </div >
        </>
    )
}