import { GetServerSideProps } from 'next';
import { Typography, Theme, List, Grid } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Layout from '../components/Layout';




export type Image = { src: string; width: number; height: number };
interface Props {
    tools: { name: string; image?: Image }[];
}

export default function Home({ tools }: Props) {

    return (
        <>
            <Layout title="Dune.js">
                <Grid container spacing={4} direction="column">
                    <Grid item container spacing={4} direction="column" xs={12} alignItems="center">
                        <Grid container item alignContent="center" justifyContent="center">
                            <Typography variant="h5" component="h2">
                                Tools
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
}
