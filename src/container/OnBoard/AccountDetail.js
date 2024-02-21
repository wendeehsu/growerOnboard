import { TextField, Checkbox } from "../../components";
import { useState } from "react";
import Button from '@mui/material/Button';

export default function AccountDetail({onStageChange}) {
  const [noFarmName, setNoFarmName] = useState(false);

  return (
    <div>
      <p className="text-center">We'd love to contact you!</p>
      <div className="my-[8%] mx-[20%]">
        <div className="flex gap-4">
          <TextField label="First Name" />
          <TextField label="Last Name" />
        </div>
        <TextField label="Mobile" />
        <TextField label="Farm Name" disabled={noFarmName} />
        <Checkbox label="I don't have a farm name" onChange={setNoFarmName} />
        <TextField label="Zip code" />
      </div>
      {/* TODO: Back */}
      <Button
          sx={{margin: '16px auto', display: 'flex', borderRadius: '40px', textTransform: 'none'}}
          variant="contained"
          color="success"
          onClick={() => onStageChange(3)}>
            Submit
      </Button>
    </div>
  );
}
