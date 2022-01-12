import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usersSchema = new Schema({
	publicAddress: {
		type: String,
		required: false,
		unique: true,
	},
});

export const Users = mongoose.model('Users', usersSchema);
