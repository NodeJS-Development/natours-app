const Tour = require('../models/tourModel');

exports.checkBody = (req, res, next) => {
  console.log('Body', req.body);
  const tour = req.body;

  if (!tour.name || !tour.price) {
    return res.status(400).json({
      error: 'Missing name or price',
    });
  }

  next();
};

// GET
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  // const tour = tours.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

// POST
exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
};

// PATCH
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...',
    },
  });
};

// DELETE
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
