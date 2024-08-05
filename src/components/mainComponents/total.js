import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { Icon } from '@mui/material';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WorkIcon from '@mui/icons-material/Work';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const Item = styled(Paper)(() => ({
    backgroundColor: '#22272e',
    // textAlign: 'center',
    height: '115px',
    width: '260px',
}));
let totalObject = [
    {
        bag: (
            <Box sx={{ bgcolor: 'pink', width: 35, height: 35, borderRadius: '26%', textAlign: 'center' }}>
                <BusinessCenterIcon sx={{ color: 'blue', marginTop: '4px' }}></BusinessCenterIcon>
            </Box>
        ),
        name: 'Total Orders',
        price: '75',
        hike: (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ArrowDropUpIcon sx={{ color: 'green' }}></ArrowDropUpIcon>
                <Typography sx={{ color: 'green', fontSize: '14px' }}> 3 %</Typography>
            </Box>
        ),
        bgColor: '',
        color: '',
    },
    {
        bag: (
            <Box sx={{ bgcolor: 'pink', width: 35, height: 35, borderRadius: '26%', textAlign: 'center' }}>
                <WorkIcon sx={{ color: 'green', marginTop: '4px' }}></WorkIcon>
            </Box>
        ),
        name: 'Total Delivered',
        price: '70',
        hike: (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ArrowDropUpIcon sx={{ color: 'red' }}></ArrowDropUpIcon>
                <Typography sx={{ color: 'red', fontSize: '14px' }}> 3 %</Typography>
            </Box>
        ),
        bgColor: '',
        color: '',
    },
    {
        bag: (
            <Box sx={{ bgcolor: 'pink', width: 35, height: 35, borderRadius: '26%', textAlign: 'center' }}>
                <ShoppingBagIcon sx={{ color: 'red', marginTop: '4px' }}></ShoppingBagIcon>
            </Box>
        ),
        name: 'Total Cancelled',
        price: '05',
        hike: (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ArrowDropUpIcon sx={{ color: 'green' }}></ArrowDropUpIcon>
                <Typography sx={{ color: 'green', fontSize: '14px' }}> 3 %</Typography>
            </Box>
        ),
        bgColor: '',
        color: '',
    },
    {
        bag: (
            <Box sx={{ bgcolor: 'pink', width: 35, height: 35, borderRadius: '26%', textAlign: 'center' }}>
                <LocalMallIcon sx={{ color: 'yellow', marginTop: '4px' }}></LocalMallIcon>
            </Box>
        ),
        name: 'Total Revenue',
        price: '$12.5K',
        hike: (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <ArrowDropUpIcon sx={{ color: 'red' }}></ArrowDropUpIcon>
                <Typography sx={{ color: 'red', fontSize: '14px' }}> 3 %</Typography>
            </Box>
        ),
        bgColor: '',
        color: '',
    },
];
export default function Total() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Stack direction='row' spacing={2}>
                {/* <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
                <Item>Item 4</Item> */}

                {totalObject.map((obj, index) => {
                    return (
                        <Item key={index}>
                            <Box sx={{ marginTop: '12px', marginLeft: '15px' }}>{obj['bag']}</Box>
                            <Typography sx={{ color: 'white', fontSize: '10px', marginTop: '5px', marginLeft: '14px' }}>{obj['name']}</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginRight: '15px', marginLeft: '15px', marginTop: '5px' }}>
                                <Typography sx={{ color: 'white', fontSize: '20px', marginTop: '5px' }}>{obj['price']}</Typography>
                                <Box sx={{ marginTop: '9px' }}>{obj['hike']}</Box>
                            </Box>
                        </Item>
                    );
                })}
            </Stack>
        </Box>
    );
}
