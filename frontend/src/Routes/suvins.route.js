import { Route } from "react-router-dom";
import Home from "../components/OrderHandling/Home/Home";


export default function SUVIN_ROUTES() {
  return (
    <>
      <Route path="/" element={<Home />}></Route>
    </>
  );
}
