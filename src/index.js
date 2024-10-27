import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './containers/App';

import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import UserManage from './containers/system/UserManage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
  
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user-manage" element={<UserManage />} />
        </Routes>
                    
            
               


        </Router>
    </Provider>
  
);





