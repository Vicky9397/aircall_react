import styled from '@emotion/styled'
import { Box } from '@mui/material';

export const StyledCostCard = styled(Box)(({ theme }) => {
    return {
        backgroundColor: '#EAF5FF',
        border: '1px solid #77BCFF',
        paddingBlock: '24px',
        paddingInline: '16px',
        borderRadius: '8px',
        '@media screen and (max-width:600px)': {

        }
    }
});
export const StyledMonthlyCostCard = styled(Box)(({ theme }) => {
    return {
        backgroundColor: '#FAFDFF',
        border: '1px solid #77BCFF',
        paddingBlock: '24px',
        paddingInline: '16px',
        borderRadius: '8px',
        '@media screen and (max-width:600px)': {

        }
    }
})