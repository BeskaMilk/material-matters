import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import LandingPage from './components/landingpage.js'
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { BrowserRouter } from 'react-router-dom';



//just added here --------------------

// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => res.render('Welcome'));

// module.exports = router;

//just added here --------------------


ReactDOM.render(
	<BrowserRouter>
<App />
	</BrowserRouter>
	, document.getElementById('root'));




