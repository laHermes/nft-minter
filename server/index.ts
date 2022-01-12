import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

dotenv.config();

const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_USERNAME = process.env.DB_USERNAME || '';

if (DB_PASSWORD === '') {
	console.warn('Must provide DB_PASSWORD environment variable');
	process.exit(1);
}

if (DB_USERNAME === '') {
	console.warn('Must provide DB_USERNAME environment variable');
	process.exit(1);
}

const SERVER_PORT = process.env.SERVER_PORT || 3001;

const app = express();

// start server function
const startServer = async () => {
	const httpServer = http.createServer(app);

	// Mongo DB connection
	mongoose
		.connect(
			`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.lplof.gcp.mongodb.net/r_p_s?retryWrites=true&w=majority`
		)
		.then(() => console.log('Connected to MongoDB!'))
		.catch((err) => console.warn('Error in MongoDB connection!', err));

	httpServer.listen(SERVER_PORT, () => {
		console.log(`======================================================`);
		console.log(`HTTP Server ready at  http://localhost:${SERVER_PORT}`);
		console.log(
			`Apollo Server ready at  http://localhost:${SERVER_PORT}${server.graphqlPath}`
		);
		console.log(`======================================================`);
	});
};

startServer();
