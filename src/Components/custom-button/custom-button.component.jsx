/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  children, isGoogleSignIn, inverted, ...otherProps
}) => (
  <button className={`${inverted ? 'inverted' : ''} custom-button`} type="button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
