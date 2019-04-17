export const alignmentIsRow = (alignment, displayOptions, component) => {
    const { alignments } = displayOptions[component];
    const alObj = alignments.reduce((acc, val) => {
        acc[val.value] = val.value;
        return acc;
    }, {});
    return alignment === alObj.horizontal;
};

