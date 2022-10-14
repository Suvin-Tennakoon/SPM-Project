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
import { useParams } from "react-router-dom";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import { Typography } from "@mui/material";

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
const Pdf = ({ paymentdet }) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.viewImg}>
        <Image src="/assets/imgs/logo.png" style={styles.headImage}></Image>
      </View>
      <View>
        <Image src={paymentdet.cakeImage}></Image>
      </View>
      <Text>Order No.</Text>
      <Text>{paymentdet._id}</Text>
      <Text>Customer Name</Text>
      <Text>{paymentdet.customer}</Text>
      <Text>Cake Type</Text>
      <Text>{paymentdet.cakeType}</Text>
      <Text>Seller Name</Text>
      <Text>{paymentdet.seller}</Text>
      <Text>Payment Type</Text>
      <Text>{paymentdet.paymentType}</Text>
      <Text>Amount</Text>
      <Text>{paymentdet.amount}</Text>
      <Text>Discount</Text>
      <Text></Text>
      <Text>Total</Text>
      <Text></Text>
    </Page>
  </Document>
);

function PdfGen(props) {
  return (
    <Typography gutterBottom variant="h5" component="div">
      Invoice
      <button
        className="btn btn-outline-primary btn-sm"
        style={{ marginLeft: "300px" }}
      >
        <PDFDownloadLink
          document={<Pdf paymentdet={props.paymentdet} />}
          fileName="Invoice.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download"
          }
        </PDFDownloadLink>
      </button>
    </Typography>
  );
}

export default PdfGen;
