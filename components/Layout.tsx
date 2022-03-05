import { ReactElement } from 'react';
import Head from 'next/head';


interface LayoutProps {
    children: ReactElement[] | ReactElement | string;
    title: string;
}

const Layout = ({ children, title }: LayoutProps): ReactElement => {

    return (
        <>
            <Head >
                <title >{title}</title>
            </Head>
            <main>{children}</main>
        </>
    );
};

export default Layout;
