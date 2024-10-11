import { LoaderProps } from "./Loader.props";
import React from 'react';
import * as Style from "./Loader.style";

const Loader: React.FC<LoaderProps> = ({
  type = 'spinner', 
  primaryColor, 
  secondaryColor, 
  size, 
  speed, 
  progress
}) => {
  return (
    <>
      {type === 'spinner' && (
        <Style.Spinner 
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          size={size}
          speed={speed}
        />
      )}
      {type === 'bar' && (
        <Style.ProgressBarWrapper secondaryColor={secondaryColor}>
          <Style.ProgressBar 
            primaryColor={primaryColor} 
            size={size} 
            progress={progress} 
          />
        </Style.ProgressBarWrapper>
      )}
    </>
  );
};

export default Loader;
