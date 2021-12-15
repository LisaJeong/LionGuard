import * as React from 'react';
import { Stepper, Step } from 'react-form-stepper';

const styleConfig = {
  "activeBgColor": "#C4D8E2",
  "completedBgColor": "#000D74"
};

export default function ProfileStepper(props) {
  return (
    <Stepper
      style={{ flex: 1 }}
      activeStep={props.step}
      completed={props.step}
      connectorStateColors
      connectorStyleConfig={{
        stepSize: 10,
        nonLinear: true,
        size: 3,
        activeColor: "#C4D8E2",
        completedColor: "#000D74"
      }}
    >
      {/* This package is so weird. The connecting lines between the steps depend on the label lengths... */}
      {/* This is a disgusting woraround, TODO: find an alternative*/}

      <Step styleConfig={styleConfig} label="&nbsp;&nbsp;Gender&nbsp;&nbsp;" />
      <Step styleConfig={styleConfig} label="&nbsp;Peference&nbsp;" />
      <Step styleConfig={styleConfig} label="Destination" />
      <Step styleConfig={styleConfig} label="&nbsp;&nbsp;Picture&nbsp;&nbsp;" />
    </Stepper>
  );
}