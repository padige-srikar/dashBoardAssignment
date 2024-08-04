import React from 'react';
import Total from './total';
import Profit from './profits';
import Goals from './goals';
import Review from './review';
import BarChart from './graph';
import TableData from './table';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function MainContent() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Total />
                </Grid>
                <Grid item xs={4}>
                    <Profit />
                </Grid>
                <Grid item xs={8}>
                    <BarChart />
                </Grid>
                <Grid item xs={4}>
                    <Goals />
                </Grid>
                <Grid item xs={8}>
                    <TableData />
                </Grid>
                <Grid item xs={4}>
                    <Review />
                </Grid>
            </Grid>
        </Box>
    );
}
