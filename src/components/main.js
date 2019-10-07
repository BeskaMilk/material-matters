import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import LandingPage from './landingpage';
import Register from './register';
import Contact from './contact';
import LogIn from './logIn';
import AboutUs from './aboutUs';
import LogIn_Register from './logIn_Register';



//just added here --------------------

// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => res.render('Welcome'));

// module.exports = router;

//just added here --------------------



const Main = () => (
	<Switch>
	 <Route exact path = "/landingpage" component = {LandingPage} />
	 <Route path = "/register" component = {Register} />
	 <Route path = "/contact" component = {Contact} />
	 <Route path = "/logIn" component = {LogIn} />
	 <Route path = "/aboutUs" component = {AboutUs} />
	 <Route path = "/logIn_Register" component = {LogIn_Register} />
	</Switch>

)

export default Main;

