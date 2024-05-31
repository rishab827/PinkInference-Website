import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SimpleAppBar from './Components/ProductsPage/SimpleAppBar';
import ProductFooter from './Components/ProductFooter'; // Make sure this import path is correct
import Privacy from './Components/Legal/PrivacyPolicy';
import Terms from './Components/Legal/TermsofUse';
import Products from './Components/Products';
import Mission from './Components/Mission';
import Support from './Components/Support';
import MainContent from './Components/MainContent';
import DAQ from './Components/ProductsPage/DAQ';
import Software from './Components/ProductsPage/Software';
import Plates from './Components/ProductsPage/Plates';
import './App.css';

const AppWrapper = () => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  const showSimpleAppBarPaths = new Set(['/daq/', '/software/', '/plates/']);
  const shouldShowSimpleAppBar = showSimpleAppBarPaths.has(currentPath.endsWith('/') ? currentPath : `${currentPath}/`);


  return (
    <div className="app-container">
      {shouldShowSimpleAppBar && <SimpleAppBar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/privacy/" element={<Privacy />} />
          <Route path="/terms/" element={<Terms />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/mission/" element={<Mission />} />
          <Route path="/support/" element={<Support />} />
          <Route path="/daq/" element={<DAQ />} />
          <Route path="/software/" element={<Software />} />
          <Route path="/plates/" element={<Plates />} />
          {/* Add other routes here if needed */}
        </Routes>
      </div>
      <ProductFooter />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;