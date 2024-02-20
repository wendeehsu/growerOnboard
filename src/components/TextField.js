import TextField from "@mui/material/TextField";

export default function customTextField({label, isRequired, fullWidth= true}) {
    return (
        <>
            {label && <p className="mb-1">{label}</p> }
            <TextField
                hiddenLabel
                required={isRequired}
                fullWidth={fullWidth}
                size="small"
                variant="outlined"
            />
        </>
    )
}