'use strict';

const Slide = require('../../models/slide');
const AppError = require('../../libs/errors');

const SlideController = {
	get: (req, res, next) => {
		Slide.find((err, slides) => {
			if (err) {
				return next(err);
			}
			res.json(slides);
		});
	},
	create: (req, res, next) => {
		let { image, info } = req.body;
		let buffer = new Buffer(image, 'base64');
		Slide.create({ image: buffer, info }, (err, slide) => {
			if (err) {
				return next(AppError.badRequest(err.message));
			}
			res.json(slide);
		});
	},
	update: (req, res, next) => {
		let id = req.body._id;
		const opts = { runValidators: true };
		Slide.findByIdAndUpdate(id, { $set: req.body }, opts, (err, slide) => {
			if (err) {
				return next(AppError.badRequest(err.message));
			}
			if (!slide) {
				return next(AppError.notFound());
			} else {
				res.json(slide);
			}
		});
	},
	delete: (req, res, next) => {
		let id = req.body._id;
		Slide.findByIdAndRemove(id, (err, slide) => {
			if (err) {
				return next(AppError.badRequest(err.message));
			}
			if (!slide) {
				return next(AppError.notFound());
			} else {
				res.json(slide);
			}
		});
	}
};

module.exports = SlideController;