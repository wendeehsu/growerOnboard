import TextField from "@mui/material/TextField";

export default function customTextField({label, isRequired, disabled = false }) {
    return (
        <div>
            {label && <p className="mt-2 mb-1">{label}</p> }
            <TextField
                hiddenLabel
                required={isRequired}
                disabled={disabled}
                fullWidth
                size="small"
                variant="outlined"
            />
        </div>
    )
}