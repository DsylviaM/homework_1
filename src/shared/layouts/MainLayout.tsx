import React, { use, useEffect, useState } from "react";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import "./MainLayout.modul.scss";
import PostList from "../../widgets/PostList/PostList";
import { Post } from "../constants/posts";

interface MainLayoutProps {
  posts: Post[];
}


const MainLayout = ({posts}: MainLayoutProps) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Header
                appTitle="My Application for homework 3"
                factsTitle="Interesting facts: "
            />
            <main>
                <PostList isLoading={isLoading} posts={posts}/>
            </main>
            <Footer name="Natalia" />
        </>
    )
}
export default MainLayout;