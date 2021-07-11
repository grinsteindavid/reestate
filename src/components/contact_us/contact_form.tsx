import React from 'react';
import { Grid, TextField } from '@material-ui/core';

const ContactForm = () => {
    return (
        <form noValidate autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField id="standard-basic" label="Standard" />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
            </Grid>
        </form>
    );
};

export default ContactForm;
