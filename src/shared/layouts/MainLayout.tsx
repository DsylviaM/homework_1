import React from "react";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import PostList from "../../widgets/PostList/PostList";

const MainLayout = () => {
    return (
        <>
            <h1>My Application for homework 1</h1>
            <Header />
            <main>
                <PostList />
            </main>
            <Footer />
        </>
    )
}
export default MainLayout;