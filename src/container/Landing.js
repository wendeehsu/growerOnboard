import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Landing() {
  let navigate = useNavigate();

  return (
    <div className="h-[100vh] bg-right bg-[url('../public/images/Farmer.png')] bg-contain bg-no-repeat">
        <div className="w-[60%] pl-[10%] py-[8%]">
            <h1 className="text-8xl font-bold mb-4">
                Get Access to a Larger Market.
            </h1>
            <Button 
              variant="contained"
              color="success"
              sx={{ borderRadius: '20px', textTransform: 'none'}}
              onClick={() => navigate("/onboard")}
              endIcon={<ArrowForwardIcon />}>
                Sell your crops
            </Button>
        </div>
    </div>
  );
}
