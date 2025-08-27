import React, { ReactNode, use, useEffect, useState } from "react";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import "./MainLayout.modul.scss";
import PostList from "../../widgets/PostList/PostList";
import { Post } from "../../entities/post/model/mocks/types";

interface MainLayoutProps {
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
    posts: Post[];
}


const MainLayout = ({ posts, children, header, footer }: MainLayoutProps) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            {header}
            <main>
                {children}
                {/* <PostList isLoading={isLoading} posts={posts}/> */}
            </main>
            {footer}
        </>
    )
}
export default MainLayout;