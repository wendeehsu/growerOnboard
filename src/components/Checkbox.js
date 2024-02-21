import Checkbox from '@mui/material/Checkbox';

export default function customCheckBox({label, onChange}) {
    return (
        <div className='flex items-center mt-2'>
            <Checkbox
                color="success"
                sx={{ml: '-12px'}}
                onChange={(e) => onChange(e.target.checked)}
            />
            <p>{label}</p>
        </div>
    )
};