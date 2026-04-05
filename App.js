import React, { useState } from 'react';
import TopBar from './TopBar';

const App = () => {
  // Adding advancedFeatures state
  const [advancedFeatures, setAdvancedFeatures] = useState(false);

  return (
    <div>
      <TopBar advancedFeatures={advancedFeatures} />
      {/* Other components can be added here */}
    </div>
  );
};

export default App;