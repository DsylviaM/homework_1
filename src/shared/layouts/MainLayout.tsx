import React, { ReactNode } from "react";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import PostList from "../../widgets/PostList/PostList";

interface MainLayoutProps {
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
}

const MainLayout = ({ children, header, footer }: MainLayoutProps) => {
    return (
        <>
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}
export default MainLayout;