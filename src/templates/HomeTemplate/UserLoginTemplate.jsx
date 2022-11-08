import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Layout } from 'antd';

const { Sider, Content } = Layout;

export const UserLoginTemplate = (props) => {
    let { Component, ...restRoute } = props;
    let [{ width, height }, setSize] = useState({ width: Math.round(window.innerWidth), height: Math.round(window.innerHeight) });

    useEffect(() => {
        window.onresize = () => {
            setSize({
                width: Math.round(window.innerWidth),
                height: Math.round(window.innerHeight),
            })
        }
    }, []);

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Layout>
                <Sider width={width / 2} style={{ height: height, backgroundImage: `url(https://picsum.photos/${Math.round(width / 2)}/${height})`, BackgroundSize: '100%' }}></Sider>
                <Content>
                    <Component {...propsRoute} />
                </Content>
            </Layout>
        </>
    }}
    />
}