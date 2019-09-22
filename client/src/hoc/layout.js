import React from 'react';
import Header from '../components/Header/header'

const Layout = (props) => {
    console.log(props.children)
    return (
        <div>
            <Header/>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;