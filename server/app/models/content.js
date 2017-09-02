'use strict';

const db = require('../mongodb');

const Content = {
	get: () => {
		return db.content.findOne();
	},
	insert: (data) => {
		let inserted = Object.assign({}, data, {
			_id: db.ObjectId(data._id) 
		});
		return db.content.save(inserted);
	},
	// update: (data) => {
	// 	return db.content.findAndModify({
	// 		update: { $set: data }
	// 	})
	// 	.then(res => res.value)
	// 	.catch(err => {
	// 		throw new Error('Cannot update');
	// 	});
	// }
};

module.exports = Content;