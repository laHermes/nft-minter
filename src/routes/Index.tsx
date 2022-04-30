import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//layout
import Layout from 'components/Layout';
// PAGES
import Collection from 'pages/Collection/Index';
import Main from 'pages/Main/Main';

const Index = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/collection' element={<Collection />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default Index;
