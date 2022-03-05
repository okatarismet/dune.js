import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/reducers/rootReducer";
import { theme } from '../../lib/theme'
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getPrices } from '../../store/actions/priceActions'

function stylePrice(x: string | number) {
    if (typeof x === "number") {
        x = x.toString();
    }
    return parseFloat(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function styleChange(x: string | number) {
    if (typeof x === "number") {
        x = x.toString();
    }
    let change = parseFloat(x).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let color = theme.palette.color.sucess;
    if (parseInt(change) < 0) {
        color = theme.palette.color.danger;
    }
    return <Typography color={color}>{"% " + change}</Typography>
}
const classes = {
    tableNameRow: {
        display: "flex",
        // flexDirection: "row",
        paddingLeft: '2em'
    },
    tableNameSymbol: {
        marginLeft: '0.5em',
        color: "#ACADB4"
    }

}
const BasicTable = () => {
    const { data } = useSelector((state: AppState) => state.price);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getPrices());
    }, [])


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Change 24H</TableCell>
                        <TableCell align="left">Supply</TableCell>
                        <TableCell align="left">Volume 24H</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.length > 0 && data.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" >
                                <div style={classes.tableNameRow}>
                                    <Typography>{row.name}</Typography>
                                    <Typography style={classes.tableNameSymbol}>{row.symbol}</Typography>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <Typography>{stylePrice(row.priceUsd) + "$"}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                {styleChange(row.changePercent24Hr)}
                            </TableCell>
                            <TableCell align="left">
                                <Typography>{stylePrice(row.supply) + "$"}</Typography>
                            </TableCell>
                            <TableCell align="left">
                                <Typography>{stylePrice(row.volumeUsd24Hr) + "$"}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export { styleChange, stylePrice };
export default BasicTable