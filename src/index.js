import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider} from "./components/AuthContext"
import ParentComponent from './components/ParentComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <AuthProvider>
    <ParentComponent />
  </AuthProvider>,
  document.getElementById('root')
);

