import { GetServerSideProps } from 'next';
import { Typography, Theme, List, Grid } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Layout from '../components/Layout';


import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';



export default function Home({ }) {

    return (
        <>
            <Layout title="Dune.js">

            </Layout>
        </>
    );
}
export const getServerSideProps = async () => {

    return {
        redirect: {
            permanent: false,
            destination: '/dashboard'
        }
    }
}