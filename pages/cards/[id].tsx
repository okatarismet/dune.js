import * as React from 'react';
import { useRouter } from 'next/router'
import { Typography } from '@mui/material';

interface Props {
    id: number,
}
const classes = {
    root: {
        width: "13em",
        height: "13em",
        padding: "1em",
        margin: "0.5em",
        borderRadius: "1em",
        border: "0.1em solid #DEDFE2",
    }
}

export default function Graph({ }: Props) {
    const router = useRouter();
    const { id } = router.query
    return (
        <div style={classes.root} >
            <div>
                <Typography>{id}</Typography>
            </div>
        </div>
    );
}