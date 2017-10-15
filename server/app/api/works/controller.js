'use strict';

const Work = require('../../models/work');
const AppError = require('../../libs/errors');

const SlideController = {
	get: (req, res, next) => {
		Work.find((err, works) => {
			if (err) {
				return next(err);
			}
			res.json(works);
		});
	},
	create: (req, res, next) => {
		let buffer = new Buffer(req.body.image, 'base64');
		Work.create({ image: buffer }, (err, work) => {
			if (err) {
				return next(AppError.badRequest(err.message));
			}
			res.json(work);
		});
	},
	delete: (req, res, next) => {
		let id = req.body._id;
		Work.findByIdAndRemove(id, (err, work) => {
			if (err) {
				return next(AppError.badRequest(err.message));
			}
			if (!work) {
				return next(AppError.notFound());
			} else {
				res.json(work);
			}
		});
	}
};

module.exports = SlideController;