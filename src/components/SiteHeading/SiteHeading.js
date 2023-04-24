import React from 'react';

import { contentChef } from '../../services/contentChefClient'

const SiteHeading = () => {
  {let sites = contentChef.getContent('simple-header')}
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
};

export default SiteHeading;
