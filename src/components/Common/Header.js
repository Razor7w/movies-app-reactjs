import React from 'react';

import { AppBar, Toolbar, Button, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuIco: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: '#4a148c',
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                <img id='logo' src={logo} alt='logo' className={classes.menuIco} />
                <Typography variant="h6" className={classes.title}>
                    <Link className='linkList' to='/'>Movie's App</Link>
                </Typography>
                
                <Button><Link className='linkList' to='/'>Movies</Link></Button>
                <Button><Link className='linkList' to='/people'>People</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
        
    );
};

export default Header;