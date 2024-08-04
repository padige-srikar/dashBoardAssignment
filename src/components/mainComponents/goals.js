import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import '../../App.css';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#22272e',
    height: '155px',
    width: '385px',
    textAlign: 'center',
}));

let goalsObject = [
    {
        name: 'Goals',
        icon: <AdjustOutlinedIcon sx={{ color: '#fa2314', fontSize: '20px', paddingTop: '7px' }}></AdjustOutlinedIcon>,
        color: '#a34943',
    },
    {
        name: 'Popular Dishes',
        icon: <LunchDiningOutlinedIcon sx={{ color: '#4524d6', fontSize: '20px', paddingTop: '7px' }}></LunchDiningOutlinedIcon>,
        color: '#3f58ab',
    },
    {
        name: 'Menu',
        icon: <RestaurantMenuOutlinedIcon sx={{ color: '#0e99f0', fontSize: '20px', paddingTop: '7px' }}></RestaurantMenuOutlinedIcon>,
        color: '#54bac4',
    },
];
export default function Goals() {
    return (
        <>
            <Item>
                {goalsObject.map((obj, index) => {
                    return (
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <>
                                    <Stack direction='row' spacing={3} sx={{ marginTop: '13px', marginLeft: '15px' }}>
                                        <Box sx={{ bgcolor: obj['color'], width: 35, height: 35, borderRadius: '50%', textAlign: 'center' }}>{obj['icon']}</Box>
                                        <Box sx={{ color: 'white' }}>{obj['name']}</Box>
                                    </Stack>
                                </>
                                <Box sx={{ color: 'White', bgcolor: '#464c50', width: 25, height: 25, borderRadius: '50%', textAlign: 'center', marginTop: '15px', marginRight: '25px' }}>
                                    <KeyboardArrowRightOutlinedIcon />
                                </Box>
                            </Box>
                        </>
                    );
                })}
            </Item>
        </>
    );
}
