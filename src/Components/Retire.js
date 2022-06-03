import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import Header from './Header';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';


export default function Retire() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => { 
        setValue((event.target.value));
    };
    const handleClick = (newPlacement) => (event) => {
        // setAnchorEl(event.currentTarget);
        // setOpen((prev) => placement !== newPlacement || !prev);
        // setPlacement(newPlacement);
    };
    return (
        <div>
            <Header />
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350} >
                        <Paper >
                            <Typography className='popup' sx={{ p: 2 }}>Extras:0 B,0 LB,0 WD,0 NB,0 P</Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350} >
                        <Paper >
                            <Typography className='popup' sx={{ p: 2 }}>Extras:0 LB,0 WD,0 NB,0 P</Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <div className='retireMain'>
                <FormControl>
                    <Typography variant="h6" >Select Player to Retire</Typography>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        className="retirradio"
                    >
                        <FormControlLabel value="striker" control={<Radio />} label="striker" />
                        <FormControlLabel value="nonstriker" control={<Radio />} label="nonstriker" />
                    </RadioGroup>
                </FormControl>
                <br />
                <Typography variant='h6'>Replaced By?</Typography>
                {/* <br/> */}
                <TextField
                    className='retirInput'
                    id="standard-number"
                    //   label="Number"
                    type="text"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
                <br />
                <br />
                <Button variant='contained'>Done</Button>
            </div>
            <Grid container justifyContent="center">
                <Grid item>
                    <Button onClick={handleClick('bottom')}>bottom</Button>
                </Grid>
            </Grid>

        </div>
    )
}
