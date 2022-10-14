import { Route } from "react-router-dom";
import AddNewDesign from "../components/ShopHandling/AddNewDesign/AddNewDesign";
import DisplayDesigns from "../components/ShopHandling/DisplayDesign/DisplayDisgn";
import Updatedesign from "../components/ShopHandling/UpdateDesign/UpdateDesign";
import Acceptedorders from "../components/ShopHandling/PlacedOrders/Placedorders";
import UpdateOwner from "../components/ShopHandling/Updateowner/UpdateOwner";
import Vieworders from "../components/ShopHandling/Vieworders/Vieworders";
import DisplayallDesigns from "../components/ShopHandling/DisplayAllDesign/Displayalldesign";

export default function CHAMODI_ROUTES() {
  return (
    <>
      <Route path="/vieworders/:id" element={<Vieworders />}></Route>
      <Route path="/addesign" element={<AddNewDesign />}></Route>
      <Route path="/displaydesign" exact element={<DisplayDesigns />}></Route>
      <Route path="/update/:id" element={<Updatedesign />}></Route>
      <Route path="/Acorders" element={<Acceptedorders />}></Route>
      <Route path="/upowner" element={<UpdateOwner />}></Route>
      <Route path="/displayall" element={<DisplayallDesigns />}></Route>
    </>
  );
}
