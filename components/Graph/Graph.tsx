import * as React from 'react';
import { Grid, Link, Typography } from '@mui/material';


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

export default function Graph({ title, source, image }: Props) {
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
                            alt={source}
                            width={250}
                            height={120}
                            style={{ objectFit: 'cover', borderRadius: '0.5em' }}
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