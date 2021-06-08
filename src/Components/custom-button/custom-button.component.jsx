/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
