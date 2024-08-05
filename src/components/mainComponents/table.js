import React from 'react';
import { Box} from '@mui/material';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Item = styled(Paper)(() => ({
    backgroundColor: '#22272e',
    textAlign: 'left',
    height: '230px',
    color: 'white',
}));
function createData(image, Coustomer, Order, Amount, Status) {
    return { image, Coustomer, Order, Amount, Status };
}
const rows = [createData('/image1.jpg', 'Mr.Bean', '15934', '$ 12.3', 'Delivered'), createData('/image2.jpg', 'Mr.Bond', '15434', '$ 15.3', 'Cancelled')];
export default function TableData() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Item>
                <span style={{ fontSize: '20px', paddingLeft: '12px' }}>Recent Orders</span>

                <TableContainer component={'div'} sx={{ backgroundColor: '#22272e' }}>
                    <Table sx={{ minWidth: '230px', color: 'white' }} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell align='left' sx={{ color: 'white' }}>
                                    Coustomer
                                </TableCell>
                                <TableCell align='right' sx={{ color: 'white' }}>
                                    Order no
                                </TableCell>
                                <TableCell align='right' sx={{ color: 'white' }}>
                                    Amount
                                </TableCell>
                                <TableCell align='center' sx={{ color: 'white' }}>
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* '&:last-child td, &:last-child th': { border: 0 } */}
                            {rows.map(row => (
                                <TableRow key={row.name} sx={{ border: 0 }}>
                                    <TableCell component='th' scope='row' sx={{ color: 'white', display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-around', padding: '22px' }}>
                                        <img src={row.image} alt={row.Coustomer} style={{ width: 30, height: 30, borderRadius: '50%' }} />
                                        <span>{row.Coustomer}</span>
                                    </TableCell>
                                    <TableCell align='right' sx={{ color: 'white' }}>
                                        {row.Order}
                                    </TableCell>
                                    <TableCell align='right' sx={{ color: 'white' }}>
                                        {row.Amount}
                                    </TableCell>
                                    <TableCell align='center' sx={{ color: 'white' }}>
                                        <Box
                                            sx={{
                                                display: 'inline-block',
                                                textAlign: 'center',
                                                // paddingTop: '9px',
                                                // paddingRight: '21px',
                                                height: '20px',
                                                width: '80px',
                                                borderTopRightRadius: '20px',
                                                borderTopLeftRadius: '20px',
                                                borderBottomRightRadius: '20px',
                                                borderBottomLeftRadius: '20px',
                                                backgroundColor: row.Status === 'Delivered' ? 'green' : 'red',
                                            }}>
                                            {row.Status}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Item>
        </Box>
    );
}
