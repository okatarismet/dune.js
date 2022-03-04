import * as React from 'react';
import { Grid, Link } from '@mui/material';

import { Typography } from '@mui/material';


interface Props {
    title: string,
    source: string,
    url: string,
    published_at: Date,
    image: string,
}
const classes = {
    root: {
        width: "100%",
        height: "15em",
        padding: "1em",
        margin: "0.5em",
        borderRadius: "1em",
        border: "0.1em solid #DEDFE2",
    }
}

export default function Graph({ title, source, url, published_at, image }: Props) {
    return (
        <div style={classes.root} >
            <div>
                <Grid container direction="row" justifyContent="space-between">
                    <Typography variant="h5" component="div">
                        {source}
                    </Typography>
                    <Link href={"/cards/" + title}>
                        <img
                            src={image}
                            alt="new"
                            width={200}
                            height={100}
                            style={{ objectFit: 'cover' }}
                        />
                    </Link>
                    <Typography color="text.secondary" gutterBottom>
                        {title}
                    </Typography>
                </Grid>

                <Grid>
                </Grid>
            </div>


        </div>
    );
}