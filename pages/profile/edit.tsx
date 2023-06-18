import { checkAuth } from '@/utils/checkAuth';
import { GetServerSidePropsContext, NextPage } from 'next';
import styles from '@/styles/ProfileEdit.module.scss';
import Head from 'next/head';
import EditForm from '@/components/profile/EditForm';

const edit: NextPage = () => {
    return (
        <>
            <>
                <Head>
                    <title>Deeds / Редактирование</title>
                </Head>
                <main>
                    <div className={styles.edit}>
                        <h1 className={styles.edit__title}>
                            Редактирование профиля
                        </h1>
                        <EditForm />
                    </div>
                </main>
            </>
        </>
    );
};
export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);
    if ('redirect' in authProps) {
        return authProps;
    }
    return {
        props: {},
    };
};
export default edit;
