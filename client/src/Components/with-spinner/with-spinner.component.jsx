/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => (isLoading ? (
  <Spinner />
) : (
  <WrappedComponent {...otherProps} />
));

export default WithSpinner;
