import React from 'react';

const Header =  () => <div>Header</div>
const Footer =  () => <div>Footer</div>

const Layout = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout; 