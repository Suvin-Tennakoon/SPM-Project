import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";

const Rate = () => {
  const [rate, setRate] = useState(0);

  return (
    <div style={{marginTop:"200px"}}>
      <h3 class="text-primary" style={{paddingLeft:"550px"}}>How was your experience so far !</h3>
      <Container>
        {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <label>
              <Radio
                type="radio"
                value={givenRating}
                onClick={() => {
                  setRate(givenRating);
                  alert(`Are you sure you want to give ${givenRating} stars ?`);
                }}
              />
              <Rating>
                <FaStar
                  color={
                    givenRating < rate || givenRating === rate
                      ? "776"
                      : "rgb(253, 254, 254 )"
                  }
                />
              </Rating>
            </label>
          );
        })}
      </Container>
    </div>
  );
};

export default Rate;
