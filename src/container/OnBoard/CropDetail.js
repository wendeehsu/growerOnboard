import { TextField, CropDropdown } from "../../components";
import { useState } from "react";

export default function CropDetail() {
  const [crops, setCrops] = useState([null, null, null]);

  return (
    <div>
      <p className="text-center">Thanks! We'd like to learn more about your crops.</p>
      <div className="my-[8%] mx-[20%] bg-slate-300">
        {
            crops.map((crop, i) => (
                <div key={`crop-${i}`}>
                    {/* <CropDropdown */}
                </div>
            ))
        }
        {/* <TextField label="Email" isRequired={true}/>
        <p className="mt-8">What crops do you want to sell?</p> */}
      </div>
    </div>
  );
}
