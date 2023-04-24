import React from 'react';
import { Text } from '@sky-uk/ui-core';

import { contentChef } from '../../services/contentChefClient'

const SiteHeading = () => {
  {let sites = contentChef.getContent('simple-header')}
  return (
    <div>
      <Text $fontSize="display-1" $marginBottom="8" $display="inline-block">Hello, World!</Text>
    </div>
  )
};

export default SiteHeading;
