import Checkbox from '@mui/material/Checkbox';

export default function customCheckBox({label}) {
    return (
        <div className='flex items-center'>
            <Checkbox color="success" />
            <p>{label}</p>
        </div>
    )
};