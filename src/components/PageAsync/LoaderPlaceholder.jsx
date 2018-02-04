import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoaderPlaceholder = () => {
  return (
    <Dimmer active>
      <Loader inverted />
    </Dimmer>
  );
};

export default LoaderPlaceholder;
