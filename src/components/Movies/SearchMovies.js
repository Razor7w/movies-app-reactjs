import React from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#4a148c',
        marginTop: '25px',
        marginBottom: '25px',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '600px',
        display: 'grid',
        gridTemplateColumns: '85% 1fr',
        padding: '15px',
        "& .MuiFormLabel-root": {
            color: '#fff',
        },
        "& .Mui-focused": {
            color: "#fff",
        },
        "& .MuiSvgIcon-root": {
            color: '#fff',
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff"
        },
    },
});

const SearchMovies = ({ validateQMovie }) => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <TextField 
                id='q_movie'
                label='Find a Movie'
                margin='normal'
                variant='outlined'
                onKeyPress={ e => validateQMovie(e) }
            />

            <IconButton onClick={ e => validateQMovie(e) }>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchMovies;