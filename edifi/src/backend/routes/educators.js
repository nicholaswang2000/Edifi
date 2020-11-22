const router = require('express').Router();
let Educator = require('../models/educator.model');

router.route('/').get((req, res) => {
  Educator.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newEducator = new Educator({username});

  newEducator.save()
    .then(() => res.json('Educator added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;