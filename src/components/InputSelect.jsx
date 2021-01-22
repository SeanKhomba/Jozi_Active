import React from 'react'
import Radium from 'radium';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const InputSelect = (props) => {
    return (
        <SelectInput 
        id="outlined-select-currency-native"
        style={styles.text_field}
        select
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        SelectProps={{native: true,}}
        helperText={props.helperText}
        variant="outlined"
        size="small" 
        inputProps={{style:{color:'#747474'}}}
        >
        {props.children}
        </SelectInput>
		)
	}
export default Radium (InputSelect)

const SelectInput = withStyles({
	root: {
    '& label': {
        color: '#747474',
    },
    '& label.Mui-focused': {
        color: '#747474',
    },
    "& .MuiInputBase-root.Mui-disabled": {
        color: "rgba(0, 0, 0,0.0)"
    },
    "& .MuiFormLabel-root.Mui-disabled": {
        color: "rgba(0, 0, 0,0.0)"
    },
    '& .MuiOutlinedInput-inputMarginDense': {
        paddingTop: 10.5,
        paddingBottom: 10.5,
        '@media (max-height: 568px)': {
            paddingTop: 10.5,
            paddingBottom: 8,            
		},
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#333333',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#333333',
            borderWidth: 2,
            borderRadius:10,
        },
        '&:hover fieldset': {
            borderColor: '#333333',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#333333',
        },
    },
	},
  })(TextField);

 const styles = {
	text_field: {
		margin:10,
		width:250,
	},
 }
