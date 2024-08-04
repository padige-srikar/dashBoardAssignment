import { Box, Icon } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import DashboardIcon from '@mui/icons-material/Dashboard';
import Stack from '@mui/material/Stack';

export default function Navbar() {
    let iconObject = [
        {
            name: 'email',
            icon: <EmailOutlinedIcon sx={{ color: 'white', fontSize: '16px', marginTop: '9px' }}></EmailOutlinedIcon>,
        },
        {
            name: 'settings',
            icon: <SettingsOutlinedIcon sx={{ color: 'white', fontSize: '16px', marginTop: '9px' }}></SettingsOutlinedIcon>,
        },
        {
            name: 'notification',
            icon: <NotificationsOutlinedIcon sx={{ color: 'white', fontSize: '16px', marginTop: '9px' }}></NotificationsOutlinedIcon>,
        },
        {
            name: 'email',
            icon: <img src='/image2.jpg' alt='Mr.Bond' style={{ width: 35, height: 35, borderRadius: '50%' }} />,
        },
    ];

    return (
        <>
            <Box className='Navbar'>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                    <Box
                        sx={
                            {
                                // position: 'relative',
                                // left: '70px',
                                // top: '10px',
                            }
                        }>
                        <Icon fontSize='large' sx={{ color: '', paddingLeft: '15px', position: 'relative', top: '4px' }}>
                            {/* <DashboardIcon sx={{ fontSize: '28px' }}></DashboardIcon> */}
                        </Icon>
                        <TextField
                            id='outlined-basic'
                            variant='outlined'
                            size='small'
                            placeholder='Search'
                            sx={{
                                marginTop: '13px',
                                marginLeft: '31px',
                                backgroundColor: '#464c50',
                                borderRadius: '5px',
                                color: 'white',
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                    height: '15px',
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' sx={{ color: 'white' }}>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            right: '50px',
                            top: '10px',
                            width: 'max-content',
                        }}>
                        <Stack direction='row' spacing={2}>
                            {iconObject.map((n, index) => {
                                return <Box sx={{ bgcolor: '#464c50', width: 35, height: 35, borderRadius: '50%', textAlign: 'center' }}>{n['icon']}</Box>;
                            })}
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
