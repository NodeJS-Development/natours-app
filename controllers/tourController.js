const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.checkID = (req, res, next, value) => {
  console.log(`Tour id is: ${value}`);

  if (+req.params.id > tours.length) {
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid ID'
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  console.log('Body', req.body);
  const tour = req.body;

  if (!tour.name || !tour.price) {
    return res.status(400).json({
      error: 'Missing name or price'
    });
  }

  next();
}

// GET
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
}

exports.getTour = (req, res) => {
  console.log(req.params);
  const id = +req.params.id;
  const tour = tours.find(tour => tour.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
}

// POST
exports.createTour = (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      }
    });
  });
};

// PATCH
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...'
    }
  })
};

// DELETE
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  })
};