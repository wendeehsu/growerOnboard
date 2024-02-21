import { TextField } from "../../components";
import Button from '@mui/material/Button';

export default function Thank() {
  return (
    <div>
      <p className="text-center">We'd love to contact you!</p>
      <div className="my-[8%] mx-[20%]">
        <TextField label="Your personal product listing page" />
      </div>
      <Button
          sx={{margin: '16px auto', display: 'flex', borderRadius: '40px', textTransform: 'none'}}
          variant="contained"
          color="success">
            Copy Link & Share
      </Button>
    </div>
  );
}
