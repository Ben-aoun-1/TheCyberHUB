import { RoomCardContainer, RoomTags } from "./RoomCardElement";
import React from "react";
import { RouterLink } from "../../Tools/ToolsElements";

export default function RoomCard(props) {
    return (
        <RoomCardContainer>
            <div
                style={{
                    width: "100%",
                    height: "87px",
                    background: "#1A1C1D",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "5px",
                }}
            >
                <div style={{ padding: "10px" }}>
                    <h1>{props.title}</h1>
                    <h2 style={{ opacity: "80%", fontSize: "14px" }}>{props.subtitle}</h2>
                </div>
                <RouterLink
                    to={`/websecurity/labs/${props.link}`}
                    style={{
                        background: "transparent",
                        height: "100%",
                        width: "130px",
                        fontSize: "20px",
                        color: "#FF6B08",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textDecoration: "none",
                    }}
                >
                    View Lab
                </RouterLink>
            </div>
            <div
                style={{
                    width: "100%",
                    height: "63px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    background: "#131313",
                }}
            >
                <div
                    style={{
                        height: "63px",
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "row",
                        alignItems: "center",
                        background: "#131313",
                    }}
                >
                    {props.tags.map((data) => {
                        return <RoomTags key={data}>{data}</RoomTags>;
                    })}
                </div>

                <div
                    style={{
                        background: "#142638",
                        marginRight: "20px",
                        padding: "7px",
                        borderRadius: "5px",
                    }}
                >
                    <label style={{}}>{props.level}</label>
                </div>
            </div>
        </RoomCardContainer>
    );
}
