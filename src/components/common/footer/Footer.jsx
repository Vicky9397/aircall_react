import React from 'react'
import { Box, Container, Typography, Stack, Link } from '@mui/material'

function Footer() {
    return (
        <>
            <Box py={{ xs: 3, sm: 4 }} component='footer' sx={{ backgroundColor: 'primary.main', color: 'common.white' }}  >
                <Container fixed>
                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={{ xs: 'center', sm: 'space-between' }} alignItems={'center'} spacing={2} useFlexGap >
                        <Typography fontSize={14} >&#169;2024  abc company</Typography>
                        <Link color={'common.white'} fontSize={14} underline="none" sx={{ cursor: 'pointer' }}> Cookies Policy </Link>
                    </Stack>
                </Container>

            </Box >
        </>
    )
}

export default Footer