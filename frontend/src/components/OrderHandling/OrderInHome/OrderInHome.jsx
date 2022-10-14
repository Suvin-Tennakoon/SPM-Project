import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { blue } from "@mui/material/colors";
import { BACKEND_DOMAIN } from "../Domain";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

function SimpleDialog(props) {
  const [shopowners, setShopOwners] = useState([]);

  useEffect(() => {
    axios
      .get(BACKEND_DOMAIN + "/api/customers/getShopOwnersNames")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Select Cake Shop</DialogTitle>
        <List sx={{ pt: 0 }}>
          {shopowners.map((owner) => (
            <ListItem
              button
              onClick={() => handleListItemClick(owner)}
              key={owner}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <StorefrontIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={owner} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </ThemeProvider>
  );
}

export default function OrderInHome() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    if (value !== "") {
      window.location = "/placeOrder/" + value;
    }
  };

  return (
    <div
      className="container-fluid has-bg-overlay text-center text-light has-height-lg middle-items"
      id="placeorder"
    >
      <div className="">
        <h2 className="section-title mb-5">Order a Cake</h2>

        <a
          className="btn btn-lg btn-primary"
          id="rounded-btn"
          onClick={handleClickOpen}
        >
          PLACE ORDER
        </a>
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
