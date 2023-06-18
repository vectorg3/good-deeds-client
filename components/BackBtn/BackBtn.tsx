import React from 'react';
import styles from './BackBtn.module.scss';
import Link from 'next/link';

const BackBtn: React.FC = () => {
    return <Link href='/' className={styles.backbtn}>Назад</Link>;
};

export default BackBtn;
