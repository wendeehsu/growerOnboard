import { TextField, CropDropdown, Dropdown } from "../../components";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Signup({startStage = 0}) {
  const [crops, setCrops] = useState([null]);
  const [stage, setStage] = useState(startStage);

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
        {
          stage === 0 ? "Get instant access to a larger market."
          : "Thanks! We'd like to learn more about your crops."
        }
      </p>
      <div className="my-[8%] mx-[20%]">
        {stage === 0 && 
          <>
            <TextField label="Email" isRequired={true}/>
            <p className="mt-8">What crops do you want to sell?</p>
          </>
        }
        
        {
          crops.map((crop, i) => (
            <>
              { stage === 1 && <p key={`p-${i}`} className="mb-1">Crop</p> }
              <div key={`div-${i}`} className="flex mb-2">
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
              {/* { stage === 1 && */
                  <>
                    <Dropdown
                      key={`method-${i}`}
                      label="Production Method"
                      value="Traditional"
                      options={["Traditional", "Regenerative", "Organic"]}
                    />
                    <div className="flex gap-4 items-end">
                      <TextField label="Seed Variety" />
                      <Dropdown
                        key={`crop-year-${i}`}
                        label="Crop Year"
                        value={2024}
                        options={[2024,2023]}
                      />
                    </div>
                    <div className="flex gap-4 items-end">
                      <TextField label="Volumn" />
                      <Dropdown
                        key={`volumn-unit-${i}`}
                        value="acre"
                        options={["acre"]}
                      />
                    </div>
                  </>
              }
            </>
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
          onClick={() => setStage(1)}
          endIcon={<ArrowForwardIcon />}>
          Sign Up
      </Button>
    </div>
  );
}
