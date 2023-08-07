// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyPage from './pages/MyPage';
// Other imports...
import './styles/custom.css'; // Import the custom CSS file

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/my-page" component={MyPage} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;
