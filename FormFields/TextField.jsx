import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import { withStyles } from '@material-ui/core/styles';
import { textStyles } from './styles';

function TextField (props) {
    const { classes, labelSize } = props;
    const handleChange = e => props.updateResponse(e.target.value);

    return (
        <FormControl fullWidth>
            <InputLabel
                className={classes[labelSize]}
                classes={{
                    disabled: classes.overrideDisable
                }}
                disabled={props.disabled}
                shrink
                required={props.required}
            >
                {props.label || "Label Text / Question"}
            </InputLabel>
            <Input
                classes={{
                    disabled: classes.solidUnderline
                }}
                onChange={handleChange}
                inputProps={{
                    style: { cursor: 'pointer'}
                }}
                disabled={props.disabled}
                fullWidth
                placeholder={props.placeholder}
            />
            <FormHelperText>{props.helperText}</FormHelperText>
        </FormControl>
    );
}

export default withStyles(textStyles)(TextField);

