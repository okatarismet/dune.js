import * as React from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/reducers/rootReducer';
import { getNews } from '../../store/actions/newsActions';
import Graph from '../../components/Graph';




const ResponsiveAppBar = () => {
    const { data } = useSelector((state: AppState) => state.news);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getNews());
    }, [])

    return (
        <>
            <Typography variant='h2' style={{ padding: '1em 0em' }}>Latest News</Typography>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                {data && data.length > 0 && data.slice(0, 4).map((e, i) => {
                    return <Graph key={i} {...e} />
                })}
            </div>
        </>
    );
};
export default ResponsiveAppBar;
