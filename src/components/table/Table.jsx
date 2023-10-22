import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, trackingId, data, status) {
  return { name, trackingId, data, status};
}

const rows = [
  createData('Lasania Chiken fri', 1809484, "2 March 2022", "Approved"),
  createData('Ice cream sandwich', 1809484, "2 March 2022", "Panding"),
  createData('Lasania Chiken fri', 1809484, "2 March 2022", "Approved"),
  createData('Ice cream sandwich', 1809484, "2 March 2022", "Delivered"),
];

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Orders</h3>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">tracking ID</TableCell>
                <TableCell align="left">Data</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left"></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.data}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">Detail</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
