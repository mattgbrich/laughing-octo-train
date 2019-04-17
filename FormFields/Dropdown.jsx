import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { textStyles } from './styles';

function Dropdown (props) {
    const [value, setValue] = useState('');
    const { classes } = props;

    const handleChange = ({ target }) => {
        const { disabled } = props;
        setValue(target.value);
        if (!disabled) props.updateResponse(target.value);
    };

    return (
        <>
            <FormControl
                component="fieldset"
                required={props.required}
                fullWidth
            >
                <InputLabel
                    className={classes[props.labelSize]}
                    shrink
                >
                    {props.label || "Field Label / Question"}
                </InputLabel>
                <Select
                    aria-label={props.label}
                    name={props.label}
                    value={value}
                    onChange={handleChange}
                >
                    {props.options.map(option => (
                        <MenuItem
                            key={option.id}
                            value={option.id}
                            children={option.label}
                        />
                    ))}
                </Select>
            </FormControl>
            <FormHelperText>{props.helperText}</FormHelperText>
        </>
    );
}

export default withStyles(textStyles)(Dropdown);
