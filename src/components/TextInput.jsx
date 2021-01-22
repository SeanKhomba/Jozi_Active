import React from 'react'
import Radium from 'radium';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const TextInput = (props) => {
    return (
        <CssTextField 
        style={styles.text_field}
        value={props.value} 
        onChange={props.onChange}
        id="outlined-secondary" 
        label={props.label} 
        type={props.type}
        variant="outlined" 
        size="small" 
        inputProps={{style:{color:'#747474'}}}
        />
		)
	}
export default Radium (TextInput)

const CssTextField = withStyles({
	root: {
    '& label': {
        color: '#747474',
    },
    '& label.Mui-focused': {
        color: '#747474',
    },
    '& .MuiOutlinedInput-inputMarginDense': {
        paddingTop: 10.5,
        paddingBottom: 10.5,
        '@media screen and (max-height: 568px)': {
            paddingTop: 5,
            paddingBottom: 10,            
		},
    },
    "& .MuiInputBase-root.Mui-disabled": {
        color: "rgba(0, 0, 0,0.0)"
    },
    "& .MuiFormLabel-root.Mui-disabled": {
        color: "rgba(0, 0, 0,0.0)"
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
		margin:8,
        width:250,
        '@media screen and (min-height: 568px)': {
            margin:2,            
		},
	},
 }
