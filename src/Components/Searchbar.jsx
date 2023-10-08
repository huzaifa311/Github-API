import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ onChange }) {
    
    return (
        <TextField id="filled-basic" label="Enter Github UserName" variant="filled" sx={{
            // background: 'white',
            // borderRadius : '10px',
            // height : '50px',
            // width : '200px'
        }} onChange={onChange} />
    );
    
}