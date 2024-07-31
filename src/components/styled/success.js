import { Typography, Button } from "@mui/material";
import SuccessCheck from "../../assets/images/check_fill.svg"
const Success = () => {
    return (
        <>
            <Button sx={{ minWidth: 'fit-content', padding: 0 }}>
                <Typography component={'img'} src={SuccessCheck}></Typography>
            </Button>
        </>
    )
}
export default Success;