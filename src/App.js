import React from 'react';
// import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/mainComponents/MainContent';
import Typography from '@mui/material/Typography';
import './App.css';
import Grid from '@mui/material/Grid';

function App() {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={0.8}>
                    <Sidebar />
                </Grid>
                <Grid
                    item
                    xs={11}
                    className='main'
                    sx={{
                        marginTop: '70px',
                        //marginLeft: '20px',
                        position: 'fixed',
                        left: '130px',
                        // overflow: 'scroll',
                    }}>
                    <Typography sx={{ color: 'white', fontSize: '25px' }}>Dashboard</Typography>
                    <MainContent />
                </Grid>
            </Grid>
        </>
    );
}

export default App;
