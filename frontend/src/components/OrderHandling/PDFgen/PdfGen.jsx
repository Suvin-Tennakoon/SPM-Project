import React, { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_DOMAIN } from "../Domain";
import { useParams } from "react-router-dom";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

// Create styles
const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "#e4e4e4",
    textTransform: "uppercase",
    fontFamily: "Oswald",
  },
  body: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  row: {
    flexGrow: 1,
    flexDirection: "row",
  },
  block: {
    flexGrow: 1,
  },
  headImage: {
    width: "150px",
    height: "100px",
  },
  viewImg: {
    alignItems: "center",
    backgroundColor: "#45313c",
    paddingBottom: "20px",
  },
  viewcard: {
    border: "1px solid black",
    marginBottom: "10px",
    height: "100px",
    flexDirection: "row",
    borderRadius: "10px",
  },
  textcard: {
    fontSize: 10,
    marginBottom: "10x",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

// Create Document Component
const Pdf = ({ orders }) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.viewImg}>
        <Image src="/assets/imgs/logo.png" style={styles.headImage}></Image>
      </View>
      <View style={{ margin: "20px" }}>
        <Text
          style={{
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          ALL CAKE ORDERS
        </Text>
        <Text
          style={{
            marginTop: "30px",
            marginBottom: "20px",
            fontSize: "15px",
          }}
        >
          Pending Orders...
        </Text>
        {orders.map((itm) => {
          if (itm.accepted === 0) {
            return (
              <View style={styles.viewcard}>
                <View style={{ width: "100px", margin: "5px" }}>
                  <Image
                    src={itm?.cakeImage}
                    style={{ width: "100px", height: "100px" }}
                  ></Image>
                </View>
                <View style={{ margin: "10px", width: "200px" }}>
                  <Text style={styles.textcard}>Customer : {itm.customer}</Text>
                  <Text style={styles.textcard}>
                    Cake Type : {itm.cakeType}
                  </Text>
                  <Text style={styles.textcard}>Cake Size : {itm.size}</Text>
                  <Text style={styles.textcard}>Flavour : {itm.flavour}</Text>
                  <Text style={styles.textcard}>Sugar Level : {itm.sugar}</Text>
                  <Text style={styles.textcard}>Quntity : {itm.quantity}</Text>
                </View>

                <View style={{ margin: "10px", width: "200px" }}>
                  <Text style={styles.textcard}>
                    Accessories : {itm.accessories?.toString()}
                  </Text>
                  <Text style={styles.textcard}>
                    Ingredients : {itm.ingredients?.toString()}
                  </Text>
                  <Text style={styles.textcard}>
                    Delivery Selection :{" "}
                    {itm.deliverData.pnumber === ""
                      ? "In Store Pickup"
                      : "Deliver to Doorstep"}
                  </Text>
                  <Text style={styles.textcard}>
                    Payment Selection : {itm.paymentType}
                  </Text>
                </View>
              </View>
            );
          }
        })}

        <Text
          style={{
            marginTop: "30px",
            marginBottom: "20px",
            fontSize: "15px",
          }}
        >
          Accepted Orders...
        </Text>
        {orders.map((itm) => {
          if (itm.accepted === 1) {
            return (
              <View style={styles.viewcard}>
                <View style={{ width: "100px", margin: "5px" }}>
                  <Image
                    src={itm?.cakeImage}
                    style={{ width: "100px", height: "100px" }}
                  ></Image>
                </View>
                <View style={{ margin: "10px", width: "200px" }}>
                  <Text style={styles.textcard}>Customer : {itm.customer}</Text>
                  <Text style={styles.textcard}>
                    Cake Type : {itm.cakeType}
                  </Text>
                  <Text style={styles.textcard}>Cake Size : {itm.size}</Text>
                  <Text style={styles.textcard}>Flavour : {itm.flavour}</Text>
                  <Text style={styles.textcard}>Sugar Level : {itm.sugar}</Text>
                  <Text style={styles.textcard}>Quntity : {itm.quantity}</Text>
                </View>

                <View style={{ margin: "10px", width: "200px" }}>
                  <Text style={styles.textcard}>
                    Accessories : {itm.accessories?.toString()}
                  </Text>
                  <Text style={styles.textcard}>
                    Ingredients : {itm.ingredients?.toString()}
                  </Text>
                  <Text style={styles.textcard}>
                    Delivery Selection :{" "}
                    {itm.deliverData.pnumber === ""
                      ? "In Store Pickup"
                      : "Deliver to Doorstep"}
                  </Text>
                  <Text style={styles.textcard}>
                    Payment Selection : {itm.paymentType}
                  </Text>
                </View>
              </View>
            );
          }
        })}

        <Text
          style={{
            marginTop: "30px",
            marginBottom: "20px",
            fontSize: "15px",
          }}
        >
          Rejected Orders...
        </Text>
        {orders.map((itm) => {
          if (itm.accepted === -1) {
            return (
              <View style={styles.viewcard}>
                <View style={{ width: "100px", margin: "5px" }}>
                  <Image
                    src={itm?.cakeImage}
                    style={{ width: "100px", height: "100px" }}
                  ></Image>
                </View>
                <View style={{ margin: "10px", width: "200px" }}>
                  <Text style={styles.textcard}>Customer : {itm.customer}</Text>
                  <Text style={styles.textcard}>
                    Cake Type : {itm.cakeType}
                  </Text>
                  <Text style={styles.textcard}>Cake Size : {itm.size}</Text>
                  <Text style={styles.textcard}>Flavour : {itm.flavour}</Text>
                  <Text style={styles.textcard}>Sugar Level : {itm.sugar}</Text>
                  <Text style={styles.textcard}>Quntity : {itm.quantity}</Text>
                </View>

                <View style={{ margin: "10px", width: "200px" }}>
                  <Text style={styles.textcard}>
                    Accessories : {itm.accessories?.toString()}
                  </Text>
                  <Text style={styles.textcard}>
                    Ingredients : {itm.ingredients?.toString()}
                  </Text>
                  <Text style={styles.textcard}>
                    Delivery Selection :{" "}
                    {itm.deliverData.pnumber === ""
                      ? "In Store Pickup"
                      : "Deliver to Doorstep"}
                  </Text>
                  <Text style={styles.textcard}>
                    Payment Selection : {itm.paymentType}
                  </Text>
                </View>
              </View>
            );
          }
        })}
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

function PdfGen() {
  const seller = localStorage.getItem("FirstName");
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(BACKEND_DOMAIN + "/api/orders/getAllOrdersforCakeforShop/" + seller)
      .then((res) => {
        setOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <button
      type="button"
      className="btn btn-dark"
      style={{ border: "1px solid #ff214f" }}
    >
      <AssessmentOutlinedIcon
        style={{ color: "#ff214f", marginRight: "8px" }}
      />

      <PDFDownloadLink
        document={<Pdf orders={orders} />}
        fileName="Orders Report.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Report ! "
        }
      </PDFDownloadLink>
    </button>
  );
}

export default PdfGen;
