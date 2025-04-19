import React from "react";
import { Box, Divider, Paper, Select } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const conditions = {
    "normal" : {
        "effects": "No effect."
    },
    "deafened": {
        "effects": "disadvantage on ability checks involving hearing"
    },
    "incapacitated": {
        "effects": "you're fucked"
    },
    "grappled": {
        "effects": "A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed."
    },
}

function Selecter(props) {
    const [state, setState] = React.useState(Object.keys(props.menuitems)[0]);

    const handleChange = (event) => {
        setState(event.target.value);
    };

    return (
        <Box sx={{display: 'flex', margin:2}}>
            <FormControl fullWidth sx={{width: 150}}>
                <InputLabel id="demo-simple-select-label">{props.descriptor}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label={props.descriptor}
                    onChange={handleChange}
                >
                    {
                        Object.keys(props.menuitems).map((key, idx) => {
                            return (
                                <MenuItem value={key}>{key}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>

            <Paper sx={{width: 400}}>
                Effect: {props.menuitems[state]['effects']}
            </Paper>
        </Box>
    );
}

function Player(props) {
    return (
        <Box sx={{display: 'inline-flex'}}>
            {/* name */}
            <Paper sx={{ "margin": 1, width:100 }}>
                {props.playername}
            </Paper>

            {/* condition */}
            <Selecter menuitems={conditions} descriptor="condition" />

        </Box>
    )
}

export default function Players(props) {
    const players = [
        "Biggie",
        "Vixarion",
        "Qorin",
        "Aurelia",
        "Roy"
    ]

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {
                players.map((item, idx) => {
                    return (
                        <Player playername={item} />
                    )
                })
            }
        </Box>
    )
}