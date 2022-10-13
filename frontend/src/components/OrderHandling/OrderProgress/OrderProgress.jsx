import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_DOMAIN } from "../Domain";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import isPast from "date-fns/isPast";
import { isFuture, parseISO } from "date-fns";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import EditOffIcon from "@mui/icons-material/EditOff";
import QR from "./QR";

export default function OrderProgress() {
  const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
  };

  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    }),
  }));

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    let icons = {
      1: <PendingActionsIcon fontSize="large" />,
      2: <ThumbUpOffAltIcon fontSize="large" />,
      3: <AddTaskIcon fontSize="large" />,
    };

    if (orderProgress.decision === -1) {
      icons = {
        1: <PendingActionsIcon fontSize="large" />,
        2: <ThumbDownOffAltIcon fontSize="large" />,
        3: <ProductionQuantityLimitsIcon fontSize="large" />,
      };
    }

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  const styleDescription = (date) => {
    return (
      <>
        Seller has accepted your order and is in the processing. You can update
        or delete your order before{" "}
        <h6 className="text-info">
          <b>
            <u>{date.substring(0, 10)}</u>
          </b>
        </h6>
      </>
    );
  };

  const { id } = useParams();

  const [orderProgress, setOrderProgress] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("Your order is in review");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(BACKEND_DOMAIN + "/api/orders/getOrderProgress/" + id)
      .then((res) => {
        setOrderProgress(res.data);

        if (res.data) {
          switch (res.data.decision) {
            case 0:
              setActiveStep(0);
              setDescription(
                "Your order is in review. Seller will update the state of the order. Check the page for latest progress. Meanwhile, browse new cake designs in out store"
              );
              break;
            case -1:
              setActiveStep(2);
              setCurrentTitle("Processing of your order has been failed");
              setDescription(
                "Seller has rejected your order request. You can place a new order by doing the necessary modifications"
              );
              break;
            case 1:
              setActiveStep(1);
              setDescription(styleDescription(res.data.modPeriod));
              setCurrentTitle(
                "Your order has been accepted and in the processing"
              );
              break;
            case 5:
              setActiveStep(2);
              setDescription(
                "Pleasure doing business with you. Visit our store again.."
              );
              setCurrentTitle("Your order has been completed");
              break;
          }
        }
      });
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <div
        class="card mb-3 container"
        style={{
          backgroundColor: "#343a40",
          marginTop: "170px",
          marginBottom: "1500px",
        }}
      >
        <div class="row g-0">
          <div
            class="col-md-4"
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          >
            <img
              src={orderProgress?.cakeImage}
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title" style={{ marginBottom: "50px" }}>
                {orderProgress?.cakeName}
              </h5>
              <ThemeProvider theme={darkTheme}>
                <Stepper
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<ColorlibConnector />}
                >
                  <Step key={0}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      <b>Your order is in review</b>
                    </StepLabel>
                  </Step>

                  <Step key={1}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      <b>
                        {(orderProgress?.decision === 1 &&
                          "Seller has accepted your order") ||
                          (orderProgress?.decision === -1 &&
                            "Seller has rejected your order") ||
                          (orderProgress?.decision === 5 &&
                            "Seller has accepted your order")}
                      </b>
                    </StepLabel>
                  </Step>

                  <Step key={2}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      <b>
                        {(orderProgress?.decision === 1 &&
                          "Order successfully completed") ||
                          (orderProgress?.decision === -1 &&
                            "Order processing failed") ||
                          (orderProgress?.decision === 5 &&
                            "Order successfully completed")}
                      </b>
                    </StepLabel>
                  </Step>
                </Stepper>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>

      <div
        class="card text-center container"
        style={{
          backgroundColor: "#343a40",
          marginTop: "70px",
          marginBottom: "100px",
        }}
      >
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">{currentTitle}</h5>
          <p class="card-text">{description}</p>

          {(orderProgress?.decision === -1 && (
            <a href="/placeOrder" class="btn btn-primary">
              Place New Order
            </a>
          )) ||
            (orderProgress?.decision === 0 && (
              <a href="/" class="btn btn-primary">
                Browse More
              </a>
            )) ||
            (orderProgress?.decision === 5 && (
              <a href="/" class="btn btn-primary">
                Browse More
              </a>
            )) ||
            (orderProgress?.decision === 1 && (
              <>
                <br />
                <p
                  className="text-info"
                  style={{
                    border: "1px solid white",
                    padding: "10px",
                    borderRadius: "3px",
                  }}
                >
                  Cake Price : Rs. {orderProgress?.amount} /=
                  <br />
                  {orderProgress?.advAmount === "" ? (
                    ""
                  ) : (
                    <>Advance Payment : Rs. {orderProgress?.advAmount}/=</>
                  )}
                </p>
                <br />
                <br />
                <h6>
                  <b>Quick Links</b>
                </h6>
                <div class="row">
                  <div class="col">
                    <button
                      className="btn btn-primary circle"
                      title="Update or Delete Order"
                      onClick={() => (window.location = "/orderUpdate/" + id)}
                      disabled={isPast(parseISO(orderProgress?.modPeriod))}
                    >
                      {isPast(parseISO(orderProgress?.modPeriod)) ? (
                        <EditOffIcon />
                      ) : (
                        <BorderColorIcon />
                      )}
                    </button>
                  </div>
                  <div class="col">
                    <QR disable={orderProgress?.modPeriod} order={id} />
                  </div>
                  <div class="col">
                    <button
                      className="btn btn-primary circle"
                      title="Payment"
                      disabled={orderProgress?.advAmount === "" ? true : false}
                    >
                      {orderProgress?.advAmount === "" ? (
                        <CreditCardOffIcon />
                      ) : (
                        <CreditCardIcon />
                      )}
                    </button>
                  </div>
                </div>
              </>
            ))}
        </div>
        <div class="card-footer text-muted">
          Order REF: #{orderProgress?.orderId}
        </div>
      </div>
      <Footer />
    </>
  );
}
