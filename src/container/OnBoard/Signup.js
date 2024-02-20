import { TextField, CropDropdown } from "../../components";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Signup() {
  const [crops, setCrops] = useState([null]);

  const addCrop = () => {
    let newCrops = [...crops];
    newCrops.push(null);
    setCrops(newCrops);
  }

  const updateCrop = (index, value) => {
    let newCrops = [...crops];
    newCrops[index] = value ?? value.name;
    setCrops(newCrops)
  }

  const removeCrop = (crop) => {
    let newCrops = crops.filter((c) => c.name !== crop.name);
    setCrops(newCrops);
  }

  return (
    <div>
      <p className="text-center">
        Get instant access to a larger market.
      </p>
      <div className="my-[8%] mx-[20%]">
        <TextField label="Email" isRequired={true}/>
        <p className="mt-8">What crops do you want to sell?</p>
        {
          crops.map((crop, i) => (
            <div key={`div-${i}`} className="flex">
              <CropDropdown
                key={`crop-${i}`}
                index={i}
                value={crop}
                onChange={updateCrop} />
              <IconButton
                key={`delIcon-${i}`}
                aria-label="delete"
                onClick={() => removeCrop(crop, i)}
                disabled={crops.length <= 1}>
                <DeleteIcon />
              </IconButton>
            </div>
          ))
        }
        <Button
          sx={{margin: '16px auto', display: 'flex', borderRadius: '40px', textTransform: 'none'}}
          variant="outlined"
          color="success"
          onClick={() => addCrop()}
          startIcon={<AddIcon />}>
          Add Crops
        </Button>
      </div>
      <Button
          sx={{margin: '16px auto', display: 'flex', borderRadius: '40px', textTransform: 'none'}}
          variant="contained"
          color="success"
          onClick={() => console.log("crops ->", crops)}
          endIcon={<ArrowForwardIcon />}>
          Sign Up
      </Button>
    </div>
  );
}
