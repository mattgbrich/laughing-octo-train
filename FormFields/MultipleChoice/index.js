import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { alignmentIsRow } from './utils';
import { textStyles } from '../styles';

function MultipleChoice (props) {
    const [value, setValue] = useState(null);
    const {
        classes,
        component,
        displayOptions,
        id,
        submissionData,
        alignment,
        disabled,
        updateResponse
    } = props;

    const isRow = alignmentIsRow(alignment, displayOptions, component);

    const handleChange = ({ target }) => {
        // disabled is passed in EDITOR view only.
        // If in EDITOR, use Hooks for component state, if in SUBMIT, use Redux
        const f = disabled ? setValue : updateResponse;
        f(target.value);
    };

    const marginSize = `${props.labelSize}Margin`;

    return (
            <FormControl
                fullWidth
                required={props.required}
            >
                <InputLabel
                    className={classes[props.labelSize]}
                    shrink
                >
                    {props.label || "Field Label / Question"}
                </InputLabel>
                <RadioGroup
                    className={classes[marginSize]}
                    aria-label={props.label}
                    name={props.label}
                    value={disabled ? value : submissionData[id].response} // In EDITOR use Hook, in SUBMIT use Redux
                    onChange={handleChange}
                    row={isRow}
                >
                    {props.options.map(option => (
                        <FormControlLabel
                            key={option.id}
                            value={option.id}
                            control={<Radio />}
                            label={option.label}
                            labelPlacement={props.optionLabelPosition}
                        />
                    ))}
                </RadioGroup>
                <FormHelperText>{props.helperText}</FormHelperText>
            </FormControl>
    );
}

export default withStyles(textStyles)(MultipleChoice);
