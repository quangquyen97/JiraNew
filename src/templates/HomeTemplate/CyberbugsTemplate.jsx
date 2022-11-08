import React from "react";
import { Route } from "react-router-dom";
import MenuCyberbugs from "../../component/Cyberbugs/MenuCyberbugs";
import ModalCyberBugs from "../../component/Cyberbugs/ModalCyberBugs/ModalCyberBugs";
import SidebarCyberbugs from "../../component/Cyberbugs/SidebarCyberbugs";
import '../../index.css'

export const CyberbugsTemplate = (props) => {
    const { Component, ...restParam } = props;

    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className="jira">
                <div style={{ width: "25%", position: 'relative', zIndex: '2' }}>
                    <SidebarCyberbugs />
                    <MenuCyberbugs />
                </div>
                <div style={{ width: '80%' }}>
                    <Component {...propsRoute} />
                </div>
                <ModalCyberBugs />
            </div>

        </>
    }}
    />
}