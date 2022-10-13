import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material";
import { isFuture, parseISO } from "date-fns";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import QRCode from "qrcode";
import { FRONTEND_DOMAIN } from "../Domain";

const style = {
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function QR(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [imageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    generateQrCode();
  }, []);

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(
        FRONTEND_DOMAIN + "/acceptedOrders/" + props.order
      );
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <button
          className="btn btn-primary circle"
          title="Get QR Code"
          onClick={handleOpen}
          disabled={isFuture(parseISO(props.disable))}
        >
          <QrCode2Icon />
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Get Your QR Code
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Provide this QR code to cake shop/delivery person upon receiving
              the cake.
            </Typography>
            <br />
            {imageUrl ? (
              <a href={imageUrl} download>
                <img src={imageUrl} alt="img" />
              </a>
            ) : null}
            <br />
            <div class="card-footer text-muted">Click on QR to download</div>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
