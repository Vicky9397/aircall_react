import React from 'react'
import { Box } from '@mui/material'
import LogoLarge from '../../../assets/images/logo512.png'

function Logo() {
    return (
        <>
            <Box sx={{ cursor: 'pointer' }}>
                {/* <Avatar src={LogoLarge} alt='Logo-Large' />
                <Avatar src={LogoSmall} alt='Logo-Small' /> */}
                <Box component={'img'} src={LogoLarge} alt='Logo-Large' sx={{ width: { xs: '60px', md: '150px' }, height: { xs: '60px', md: '150px' } }} ></Box>
            </Box>
        </>
    )
}

export default Logo