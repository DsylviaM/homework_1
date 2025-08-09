import React, { use } from "react";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import '../../../css/style.css';
import PostList from "../../widgets/PostList/PostList";


const MainLayout = (props) => {

    return (
        <>
            <Header 
                appTitle="My Application for homework 1"
                factsTitle="Interesting facts: "
            />
            <main>
                <PostList />
            </main>
            <Footer name="Natalia"/>
        </>
    )
}
export default MainLayout;