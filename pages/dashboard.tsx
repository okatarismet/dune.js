import { GetServerSideProps } from 'next';
import { Theme, Grid, TextField, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Layout from '../components/Layout';
import Graph from '../components/Graph'
import Table from '../components/Table'
import DateTimePicker from '@mui/lab/DateTimePicker';



import React from 'react';
import News from '../components/News';

export type Image = { src: string; width: number; height: number };
interface Props {
    tools: { name: string; image?: Image }[];
}
interface Graph {
    graphName: string,
    who: string,
    lastUpdated: number,
}
const GraphDummy: Graph[] = [{
    graphName: "MTA Holders",
    who: "mStable - MTA",
    lastUpdated: Date.now()
}, {
    graphName: "MTA Holders",
    who: "mStable - MTA",
    lastUpdated: Date.now()
}, {
    graphName: "MTA Holders",
    who: "mStable - MTA",
    lastUpdated: Date.now()
}, {
    graphName: "MTA Holders",
    who: "mStable - MTA",
    lastUpdated: Date.now()
}]

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

