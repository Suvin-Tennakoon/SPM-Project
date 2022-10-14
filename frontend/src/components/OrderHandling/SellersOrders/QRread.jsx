import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { createTheme, ThemeProvider } from "@mui/material";
import QrReader from "react-qr-reader";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const style = {
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function QRread() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [scanResultFile, setScanResultFile] = React.useState("");
  const [scanResultWebCam, setScanResultWebCam] = React.useState("");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const qrRef = React.useRef(null);

  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
    }
  };

  const onScanFile = () => {
    qrRef.current?.openImageDialog();
  };
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <button
          className="btn btn-outline-primary rounded"
          onClick={handleOpen}
        >
          <QrCodeScannerIcon /> Scan QR
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Scan QR Code
            </Typography>
            <div className="row">
              <div className="col">
                <button
                  style={{ width: "100%" }}
                  className="btn btn-outline-secondary circle"
                  onClick={onScanFile}
                >
                  <FolderOpenIcon />
                  <QrReader
                    ref={qrRef}
                    delay={300}
                    style={{ width: "100%" }}
                    onError={handleErrorFile}
                    onScan={handleScanFile}
                    legacyMode
                  />
                </button>
              </div>
              <div className="col">
                <QrReader
                  delay={300}
                  style={{ width: "100%" }}
                  onError={handleErrorWebCam}
                  onScan={handleScanWebCam}
                />
              </div>
            </div>

            <hr />
            <br />

            <p>
              {scanResultFile === "" ? (
                ""
              ) : (
                <a href={scanResultFile}>Open Order</a>
              )}
              {scanResultWebCam === "" ? (
                ""
              ) : (
                <a href={scanResultWebCam}>Open Order</a>
              )}
            </p>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
