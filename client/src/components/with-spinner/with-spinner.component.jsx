import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const withSpinner = WrapperedComponent => { 
    const Spinner  = ({ isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrapperedComponent {...otherProps}/>
        );
    };  
    return Spinner;
};

export default withSpinner;

