import React from 'react';
import Board from './components/Board/Index';
import Header from './components/Header/Index';
import Layout from './components/Layout';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Layout>
				<Header />
				<Routes>
					<Route path='/' element={<Board />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
