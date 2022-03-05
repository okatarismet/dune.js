import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table'
import News from '../components/News';
import { Typography } from '@mui/material';

export type Image = { src: string; width: number; height: number };

export default function Home() {
    const classes = {
        root: {
            margin: "2em 8em 2em 8em"
        }
    }

    return (
        <>
            <Layout title="Dune.js">
                <div style={classes.root}>
                    <News />
                    <Typography variant='h2' style={{ padding: '1em 0em' }}>Market</Typography>
                    <Table />
                </div>

            </Layout>
        </>
    );
}

