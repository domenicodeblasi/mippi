import React, { ReactNode } from "react";
import styles from "./Layout.module.css";

type LayoutProps = {
    children: ReactNode,
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )    
}

export default Layout