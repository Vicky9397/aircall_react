import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import styled from '@emotion/styled'

const StyledTextfield = styled(TextField)(({ theme }) => {
    return {
        '&.MuiFormControl-root': {
            borderRadius: '8px'
        },
        '& .MuiInputBase-root': {
            fontSize: '14px',
            '& .MuiInputBase-input': {
                padding: '10px 12px',
                fontSize: '0.875rem'
            },
            '& .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: '8px'
            },
            '&.Mui-disabled': {
                '& .MuiOutlinedInput-notchedOutline': {
                    backgroundColor: theme.palette.background.disabled,
                    borderColor: 'transparent'
                }
            }
        },

    }
});
const StyledAutocomplete = styled(Autocomplete)(({ theme }) => {
    return {
        '& .MuiInputBase-root': {
            fontSize: '14px',
            borderRadius: '8px',
            paddingBlock: '10px',
            '& .MuiInputBase-input': {
                padding: 0
            },
            '& .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${theme.palette.primary.main}`,
            },
            '&.Mui-disabled': {
                '& .MuiOutlinedInput-notchedOutline': {
                    backgroundColor: theme.palette.background.disabled,
                    borderColor: 'transparent'
                }
            }
        }
    }
});
const StyledDatePicker = styled(DatePicker)(({ theme }) => {
    return {
        '&.MuiFormControl-root': {
            borderRadius: '8px',
            width: '100%'
        },
        '& .MuiInputBase-root': {
            fontSize: '14px',
            '& .MuiInputBase-input': {
                padding: '10px 12px',
                fontSize: '0.875rem'
            },
            '& .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: '8px'
            },
            '&.Mui-disabled': {
                '& .MuiOutlinedInput-notchedOutline': {
                    backgroundColor: theme.palette.background.disabled,
                    borderColor: 'transparent'
                }
            },
            '& .MuiInputAdornment-root ': {
                '& .MuiSvgIcon-root': {
                    fontSize: '20px'
                }
            }
        },

    }
});
const StyledTimePicker = styled(TimePicker)(({ theme }) => {
    return {
        '&.MuiFormControl-root': {
            borderRadius: '8px',
            width: '100%'
        },
        '& .MuiInputBase-root': {
            fontSize: '14px',
            '& .MuiInputBase-input': {
                padding: '10px 12px',
                fontSize: '0.875rem'
            },
            '& .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: '8px'
            },
            '&.Mui-disabled': {
                '& .MuiOutlinedInput-notchedOutline': {
                    backgroundColor: theme.palette.background.disabled,
                    borderColor: 'transparent'
                }
            },
            '& .MuiInputAdornment-root ': {
                '& .MuiSvgIcon-root': {
                    fontSize: '20px'
                }
            }
        },

    }
})

export { StyledTextfield, StyledAutocomplete, StyledDatePicker, StyledTimePicker };