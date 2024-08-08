import React from 'react';
import { Box } from '@mui/material'
// import AircallMockup from '../AircallMockup';
import AddressAutoComplete from '../AddressAutoComplete';
function MainContent() {
    return (
            <Box component={'main'} minHeight={{
                xs: 'calc(100vh - 235px)', sm: 'calc(100vh - 202px)',
                md: 'calc(100vh - 216px)'
            }} >
                {/* <AircallMockup/> */}
                <AddressAutoComplete></AddressAutoComplete>
            </Box>
    )
}

export default MainContent