export const textStyles = theme => ({
    sm: {
        cursor: 'pointer',
        fontSize: theme.typography.pxToRem(16)
    },
    md: {
        cursor: 'pointer',
        fontSize: theme.typography.pxToRem(20)
    },
    lg: {
        cursor: 'pointer',
        fontSize: theme.typography.pxToRem(24)
    },
    smMargin: {
        marginTop: '16px'
    },
    mdMargin: {
        marginTop: '20px'
    },
    lgMargin: {
        marginTop: '24px'
    },
    overrideDisable: {
        color: `${theme.palette.text.secondary} !important`
    },
    solidUnderline: {
        '&:before': {
            borderBottomStyle: 'solid !important'
        }
    }
});

export const gridStyles = (theme) => ({
    gridContainer: {
        padding: [[theme.spacing.unit * 1.875, theme.spacing.unit * 3.75]],
        wordBreak: 'break-word'
    }
});
