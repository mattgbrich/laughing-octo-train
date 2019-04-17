import React from 'react';

import * as R from 'ramda';
import Grid from '@material-ui/core/Grid';

import MultipleChoice from './MultipleChoice';
import ParagraphField from './ParagraphField';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown'
import TextField from './TextField';
import TitleDescription from './TitleDescription';
import { withStyles } from '@material-ui/core/styles';
import { gridStyles } from './styles';

function FormField(props) {
    const { fieldNames } = props.displayOptions;
    const formFieldMap = {
        [fieldNames.checkbox]: Checkbox,
        [fieldNames.select]: Dropdown,
        [fieldNames.multipleChoice]: MultipleChoice,
        [fieldNames.paragraph]: ParagraphField,
        [fieldNames.text]: TextField,
        [fieldNames.title]: TitleDescription
    };
    const DisplayField = formFieldMap[props.component];
    const displayFieldProps = R.omit(['updateFormResponse', 'classes'], props);

    const updateResponse = (response) => {
        const { id } = props;
        return props.updateFormResponse({ id, response });
    };

    return (
        <Grid container className={props.classes.gridContainer}>
            <Grid item xs={12} sm={props.width} md={props.width}>
                <DisplayField
                    updateResponse={updateResponse}
                    {...displayFieldProps}
                />
            </Grid>
        </Grid>
    );
}
export default withStyles(gridStyles)(FormField);


// updateFormField
// displayOptions
// state.formSubmit.formSubmissionData (MultipleChoice)