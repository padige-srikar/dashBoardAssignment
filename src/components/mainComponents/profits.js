import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import '../../App.css';
const Item = styled(Paper)(() => ({
    backgroundColor: '#22272e',
    height: '115px',
    width: '385px',
    // maxWidth:'260px',
    textAlign: 'center',
}));
export default function Profit() {
    return (
        <>
            <Item>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                        <Stack direction='column' justifyContent='space-around' alignItems='flex-start' spacing={0.1} sx={{ paddingLeft: '12px', paddingBottom: '10px', paddingTop: '10px' }}>
                            <Typography sx={{ color: 'white', fontSize: '10px' }}>Net Profit</Typography>
                            <Typography sx={{ color: 'white', fontSize: '35px' }}>$6759.25</Typography>
                            <Typography sx={{ color: 'green', fontSize: '20px' }}>
                                <ArrowDropUpIcon sx={{ color: 'green' }}></ArrowDropUpIcon>3 %
                            </Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <div className='progress'>
                            <span className='title timer' data-from='0' data-to='70' data-speed='1500'>
                                70%
                            </span>
                            <div className='overlay'></div>
                            <div className='left'></div>
                            <div className='right'></div>
                        </div>
                        <span style={{ color: 'white', fontSize: '10px', marginRight: '10px' }}>The values here have been round off</span>
                    </Box>
                </Box>
            </Item>
        </>
    );
}
