import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';

const Layout: React.FC<{ children: ReactNode }> = ({
    children,
}: {
    children: ReactNode;
}) => {
    return <div className={styles.layout}>{children}</div>;
};

export default Layout;
