import React, { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel, InputLabel, FormHelperText, FormControl } from '@material-ui/core';
import { textStyles } from './styles';
import { withStyles } from '@material-ui/core/styles';


function CheckboxField (props) {

    const [value, setValue] = useState('');

    const {
        id,
        classes,
        labelSize,
        options,
        alignment,
        optionLabelPosition,
        disabled,
        updateResponse,
        submissionData
    } = props;

    const isRow = (alignment === 'vertical' ? false : true);

    const handleChange = ({ target }) => {

        const items = [...value];

        if (target.checked) {
            items.push(target.value);
        } else {
            let index = items.indexOf(target.value);
            items.splice(index, 1);
        }

        if (!disabled) updateResponse(items);
        setValue(items);
    }

    const marginSize = `${labelSize}Margin`;

    return (
        <FormControl
            fullWidth
            required={props.required}
        >
            <InputLabel
                className={classes[labelSize]}
                shrink
            >
                {props.label || "Label Text / Question"}
            </InputLabel>
            <FormGroup
                className={classes[marginSize]}
                aria-label={props.label}
                name={props.label}
                value={disabled ? value : submissionData[id].response}
                onChange={handleChange}
                row={isRow}
            >

                {options.map(option => (
                    <FormControlLabel
                        key={option.id}
                        value={option.id}
                        control={<Checkbox />}
                        label={option.label}
                        labelPlacement={optionLabelPosition}

                    />

                ))
                }
            </FormGroup>
            <FormHelperText>{props.helperText}</FormHelperText>

        </FormControl>
    );
}

export default withStyles(textStyles)(CheckboxField);
