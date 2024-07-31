import React from 'react'
import { Typography, Box, Container, Stack } from '@mui/material'
import Logo from '../logo/Logo'

function Header() {
    const a = 'mockup'
    return (
        <>
            <Typography component={'header'} position={'sticky'} top={0} zIndex={1500} >
                <Box sx={{ backgroundColor: 'primary.main', minHeight: { xs: '26px', md: '40px' } }} >
                </Box>
                <Box py={{ xs: 3, sm: 4 }} sx={{ backgroundColor: 'common.white' }} boxShadow={1}>
                    <Container fixed>
                        <Box position={'relative'}>
                            <Box position={'absolute'} top={'-50px'}>
                                <Logo />
                            </Box>
                            <Stack display={{ xs: 'none', sm: 'flex' }} direction='row' justifyContent={'end'} alignItems={'center'}>
                                {a}
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Typography >

        </>
    )
}

export default Header