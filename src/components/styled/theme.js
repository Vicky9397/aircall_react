import {  createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#014D97',  //dark blue
            dark: '#034789',
            light: '#013E79'
        },
        secondary: {
            main: '#FF7100',  //orange
        },
        text: {
            primary: '#424242',
            secondary: '#1B344C',
            label: '#1B344C'
        },
        background: {
            default: '#FFF',
            paper: '#FFF',
            disabled: '#E9E9E978',
            grey1: '#F5F5F5',
            grey2: '#EEEEEE'
        }
    },
    typography: {
        fontSize: 16,
        // fontFamily:''
        // fontFamily: `'program', sans- serif`,
        fontFamily: `'Neue Haas Grotesk Display Pro', sans-serif`,
        body1: {
            fontFamily: `'Neue Haas Grotesk Display Pro', sans-serif`,
            fontSize: '1rem',
            fontWeight: '400'
        },
        label: {
            fontFamily: `'Neue Haas Grotesk Display Pro', sans-serif`,
            fontSize: '1rem',
            fontWeight: '400',
            display: 'inline-block',
            marginBottom: 4
        },
        question: {
            fontFamily: `'Neue Haas Grotesk Display Pro', sans-serif`,
            fontSize: '1.25rem',
            fontWeight: '600',
            '@media screen and (max-width: 600px)': {
                fontSize: '1.125rem'
            }
        },
        h1: {
            fontFamily: `'program', sans- serif`,
            fontSize: '3rem',   //48px
            fontWeight: '700',
            '@media screen and (max-width: 600px)': {
                fontSize: '1.75rem'
            }
        },
        h2: {
            fontFamily: `'program', sans- serif`,
            fontSize: '2rem',   //32px
            fontWeight: '700',
            '@media screen and (max-width: 600px)': {
                fontSize: '1.75rem'
            }
        },
        h3: {
            fontFamily: `'program', sans- serif`,
            fontSize: '1.75rem',   //28px
            fontWeight: '700',
            marginBottom: '1rem',
            '@media screen and (max-width: 600px)': {
                fontSize: '1.75rem'
            }
        },
        h5: {
            fontFamily: `'program', sans- serif`,
            fontSize: '1.25rem',   //20px
            fontWeight: '700',
            marginBottom: '1rem',
            '@media screen and (max-width: 600px)': {
                // fontSize: '1.75rem'
            }
        },
        error:{

            fontFamily: `'program', sans- serif`,
            fontSize: '1rem',   //20px
            fontWeight: '300',
            fontStyle: 'italic',
            color:'red'
        },
        success:{
            fontFamily: `'program', sans- serif`,
            fontSize: '1rem',   //20px
            fontWeight: '300',
            fontStyle: 'italic',
            color:'green'
        }

    },
    shadows: ['none', ' 0px 4px 9px 0px #00000026', ' 0px 4px 4px 0px #0000001F'],
    components: {
        MuiPopper: {
            styleOverrides: {
                root: {
                    '&.MuiPopper-root': {
                        boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                    }
                }
            }
        }
    },


});

export { customTheme };