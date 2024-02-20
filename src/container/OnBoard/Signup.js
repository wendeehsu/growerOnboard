import { TextField, CropDropdown } from "../../components";

export default function Signup() {
  return (
    <div>
      <p className="text-center">
        Get instant access to a larger market.
      </p>
      <div className="my-[8%] mx-[20%] bg-slate-100">
        <TextField label="Email" isRequired={true}/>
        <p className="mt-8">What crops do you want to sell?</p>
        <CropDropdown />
      </div>
    </div>
  );
}
