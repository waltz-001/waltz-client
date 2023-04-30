import "./StepProgressBar.css";
import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 70%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
  margin-bottom: 4rem;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  :before {
    content: "";
    position: absolute;
    background: #3b2166;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: "";
    position: absolute;
    background: #5b13d1;
    height: 2px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const StepStyle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ step }) =>
    step === "completed" ? "#5B13D1" : "#3b2166"};
  border: 3px solid
    ${({ step }) => (step === "completed" ? "#5B13D1" : "#3b2166")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 12px;
  color: #f3e7f3;
  @media (max-width: 600px) {
    font-size: 9px;
  }
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 12px;
  color: #ffffff;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

// const ButtonsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 0 -15px;
//   margin-top: 100px;
// `;

// const ButtonStyle = styled.button`
//   border-radius: 4px;
//   border: 0;
//   background: #5b13d1;
//   color: #ffffff;
//   cursor: pointer;
//   padding: 8px;
//   width: 90px;
//   :active {
//     transform: scale(0.98);
//   }
//   :disabled {
//     background: #f3e7f3;
//     color: #000000;
//     cursor: not-allowed;
//   }
// `;

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #ffffff;
  -ms-transform: scaleX(-1) rotate(-46deg);
  -webkit-transform: scaleX(-1) rotate(-46deg);
  transform: scaleX(-1) rotate(-46deg);
`;

const steps = [
  {
    label: "Details",
    step: 1,
  },
  {
    label: "Additional",
    step: 2,
  },
  {
    label: "Password",
    step: 3,
  },
];

const StepProgressBar = ({ page }) => {
  // const [activeStep, setActiveStep] = useState(1);
  var activeStep = 0;
  if (page === "pageone") {
    activeStep = 1;
  } else if (page === "pagetwo") {
    activeStep = 2;
  } else if (page === "pagethree") {
    activeStep = 3;
  } else {
    activeStep = 0;
  }

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={activeStep >= step ? "completed" : "incomplete"}>
              {activeStep > step ? (
                <CheckMark>L</CheckMark>
              ) : (
                <StepCount>{step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
      {/* <ButtonsContainer>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
          Previous
        </ButtonStyle>
        <ButtonStyle onClick={nextStep} disabled={activeStep === totalSteps}>
          Next
        </ButtonStyle>
      </ButtonsContainer> */}
    </MainContainer>
  );
};
export default StepProgressBar;
