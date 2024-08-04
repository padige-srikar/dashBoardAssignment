import React from 'react';
import {  Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import '../../App.css';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#22272e',
    height: '230px',
    width: '385px',
    // textAlign: 'center',
}));
export default function Review() {
    return (
        <>
            <Item>
                <Typography sx={{ color: 'white', fontSize: '17px', paddingLeft: '12px', paddingTop: '3px' }}>Customer's Feedback</Typography>
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '12px' }}>
                        <img src='/image2.jpg' alt='Mr.Bond' style={{ width: 35, height: 35, borderRadius: '50%', marginRight: '11px' }} />
                        <span style={{ color: 'white' }}>Mr Bond</span>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '12px', marginTop: '5px' }}>
                        <StarIcon sx={{ color: 'gold', fontSize: '16px' }}></StarIcon>
                        <StarIcon sx={{ color: 'gold', fontSize: '16px' }}></StarIcon>
                        <StarIcon sx={{ color: 'gold', fontSize: '16px' }}></StarIcon>
                        <StarIcon sx={{ color: 'gold', fontSize: '16px' }}></StarIcon>
                        <StarIcon sx={{ color: 'gold', fontSize: '16px' }}></StarIcon>
                    </Box>
                    <span style={{ fontSize: '12px', color: 'white', display: 'flex', alignItems: 'center', marginLeft: '12px', marginTop: '1px' }}>
                        “Their brunch is awesome, I love the avocado toast and the California focaccia”
                    </span>
                    {/* <Divider variant='middle' sx={{ backgroundColor: 'white', marginTop: '5px' }} /> */}
                </Box>
                <Divider variant='middle' sx={{ backgroundColor: 'white', marginTop: '7px' }} />
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '12px', marginTop: '10px' }}>
                        <img src='/image1.jpg' alt='Mr.Bond' style={{ width: 35, height: 35, borderRadius: '50%', marginRight: '11px' }} />
                        <span style={{ color: 'white' }}>Mr Bean</span>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '12px', marginTop: '4px' }}>
                        <StarIcon sx={{ color: 'gold', fontSize: '16px' }}></StarIcon>
                        <StarIcon sx={{ color: 'gold', fontSize: '16px' }}></StarIcon>
                        <StarIcon sx={{ color: 'gold', fontSize: '16px' }}></StarIcon>
                        <StarIcon sx={{ color: 'white', fontSize: '16px' }}></StarIcon>
                        <StarIcon sx={{ color: 'white', fontSize: '16px' }}></StarIcon>
                    </Box>
                    <span style={{ fontSize: '12px', color: 'white', display: 'flex', alignItems: 'center', marginLeft: '12px', marginTop: '2px' }}>
                        “Love it” <FavoriteIcon sx={{ color: 'red', fontSize: '14px', marginLeft: '12px' }}></FavoriteIcon>
                    </span>
                </Box>
            </Item>
        </>
    );
}
