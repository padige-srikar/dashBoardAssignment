import React from 'react';
import { Box, List, ListItem, ListItemIcon, Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './../App.css';

const Sidebar = () => {
    let nameObject = [
        {
            name: 'Home',
            icon: <HomeIcon></HomeIcon>,
        },
        {
            name: 'Note',
            icon: <NoteAltIcon></NoteAltIcon>,
        },
        {
            name: 'Assessment',
            icon: <AssessmentIcon></AssessmentIcon>,
        },
        {
            name: 'AccountBalance',
            icon: <AccountBalanceWalletIcon></AccountBalanceWalletIcon>,
        },

        {
            name: 'ShoppingBag',
            icon: <ShoppingBagIcon></ShoppingBagIcon>,
        },
    ];

    return (
        <Box class='container'>
            <Icon fontSize='large' sx={{ color: 'white', paddingLeft: '15px', position: 'relative', top: '-10px' }}>
                <DashboardIcon sx={{ fontSize: '28px' }}></DashboardIcon>
            </Icon>
            <Box
                sx={{
                    position: 'relative',
                    // top: '40px',
                    top: '9px',
                }}>
                <List sx={{ paddingTop: '0px' }}>
                    {nameObject.map((obj, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemIcon
                                    sx={{
                                        color: 'white',
                                    }}>
                                    {obj['icon']}
                                </ListItemIcon>
                            </ListItem>
                        );
                    })}
                </List>
            </Box>
            <span style={{ color: 'white', paddingLeft: '15px', position: 'absolute', bottom: '110px' }}>
                <PowerSettingsNewIcon></PowerSettingsNewIcon>
            </span>
        </Box>
    );
};

export default Sidebar;
