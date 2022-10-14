import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import { BACKEND_DOMAIN } from "../Domain";
import { useState } from "react";
import axios from "axios";

export default function DrawerDesign(props) {
  const [state, setState] = React.useState(true);
  const [images, setImages] = useState([]);

  const seller = props.seller;

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    axios
      .get(BACKEND_DOMAIN + "/api/shops/getSellersDesigns/" + seller)
      .then((res) => {
        setImages(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const list = () => (
    <Box sx={{ width: 350 }} role="presentation">
      <List>
        {images?.map((img, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                props.imageSetter(img.designimage);
              }}
            >
              <img src={img.designimage} style={{ width: 300 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
          {list()}
        </Drawer>
      </ThemeProvider>
    </div>
  );
}
