import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'

export const StyledButton = styled(Button)(({ theme, variant }) => {
    return {
        '&.MuiButtonBase-root': {
            backgroundColor: variant === 'contained' ? theme.palette.secondary.main : 'transparent',
            border: `1px solid ${theme.palette.secondary.main}`,
            color: variant === 'contained' ? theme.palette.common.white : theme.palette.secondary.main,
            padding: '8px 24px',
            borderRadius: '10px',
            fontFamily: `'program', sans- serif`,
            fontSize: '1.35rem',
            fontWeight: '700',
            letterSpacing: '1px',
            textTransform: 'capitalize',
            '@media screen and (max-width:900px)': {
                fontSize: '1rem',
                fontWeight: 600
            },
            '&:hover': {
                backgroundColor: variant === 'contained' ? '#cc5a00' : null
            },
            '&.Mui-disabled': {
                backgroundColor: theme.palette.background.disabled,
                color: '#CECECE',
                borderColor: 'transparent'
            }
        }
    }
});

export const StyledCountButton = styled(Button)(({ theme }) => {
    return {
        padding: 1,
        backgroundColor: '#EAF5FF',
        border: '1px solid #014D97',
        color: theme.palette.primary.main,
        borderRadius: '8px',
        '&.Mui-disabled': {
            backgroundColor: theme.palette.background.disabled,
            color: '#CECECE',
            borderColor: '#CECECE'
        }
    }
});

export const StyledOutlinedButton = styled(Button)(({ theme }) => {
    return {
        border: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.common.white,
        borderRadius: '10px',
        fontFamily: `'program', sans- serif`,
        fontWeight: 700,
        color: theme.palette.secondary.main,
        textTransform: 'capitalize'
    }
});
export const StyledInfo = styled(Typography)(({ theme }) => {
    return {
        backgroundColor: theme.palette.background.grey2,
        color: '#6B6B6B',
        borderRadius: '6px',
        padding: '8px 10px',
        display: 'inline-block',
        marginBlock: '12px',
        '@media screen and (max-width: 600px)': {
            textAlign: 'center'
        }
    }
});