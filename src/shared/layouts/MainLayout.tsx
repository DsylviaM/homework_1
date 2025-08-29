import React, { useState } from "react";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import "./MainLayout.modul.scss";

interface MainLayoutProps {
children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <Header
                appTitle="My Application for homework 5"
            />
            <main>
                { children }
            </main>
            <Footer name="Natalia" />
        </>
    )
}
export default MainLayout;