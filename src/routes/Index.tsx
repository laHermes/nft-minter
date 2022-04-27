import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// PAGES
import Header from 'components/Header/Header';
import Collection from 'pages/Collection/Index';
import Main from 'pages/Main/Main';

const Index = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/collection' element={<Collection />} />
			</Routes>
		</Router>
	);
};

export default Index;
