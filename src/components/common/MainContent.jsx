import React from 'react';
import { Box } from '@mui/material'
import AircallMockup from '../AircallMockup';
function MainContent() {
    return (
            <Box component={'main'} minHeight={{
                xs: 'calc(100vh - 235px)', sm: 'calc(100vh - 202px)',
                md: 'calc(100vh - 216px)'
            }} >
                <AircallMockup/>
            </Box>
    )
}

export default MainContent