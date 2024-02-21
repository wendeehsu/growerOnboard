import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function customDropdown({label, value, options, handleChange = null}) {
    return (
        <FormControl fullWidth size="small">
            <p className='mb-1'>{label}</p>
            <Select
                value={value}
                onChange={handleChange}
            >
                {options.map((option, i) =>
                    <MenuItem key={i} value={option}>{option}</MenuItem>    
                )}
            </Select>
        </FormControl>
    )
};