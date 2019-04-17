import React from 'react';

import Typography from '@material-ui/core/Typography';

function TitleDescription (props) {
    return (
        <div>
            <Typography variant={props.titleSize} gutterBottom>
                {props.title || "Title Heading"}
            </Typography>
            <Typography variant={props.descriptionSize} gutterBottom>
                {props.description || "Description sub-seading"}
            </Typography>
        </div>
    );
}

export default TitleDescription;
