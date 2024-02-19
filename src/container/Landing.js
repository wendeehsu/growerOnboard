import Button from '@mui/material/Button';

export default function Landing() {
  return (
    <div className="bg-right bg-[url('../public/images/Farmer.png')] bg-contain bg-no-repeat">
        <div className="w-[60%] pl-[10%] py-[8%]">
            <h1 className="text-8xl font-bold mb-4">
                Get Access to a Larger Market.
            </h1>
            <Button variant="contained" color="success">
                Sell your crops
            </Button>
        </div>
    </div>
  );
}
