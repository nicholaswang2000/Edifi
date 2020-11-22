const router = require('express').Router();
let Speaker = require('../models/speaker.model');

router.route('/').get((req, res) => {
  Speaker.find()
    .then(speakers => res.json(speakers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const company = req.body.company;
  const jobTitle = req.body.jobTitle;

  const newSpeaker = new Speaker({
    username,
    company,
    jobTitle
  });

  newSpeaker.save()
  .then(() => res.json('Speaker added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Speaker.findById(req.params.id)
    .then(speaker => res.json(speaker))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Speaker.findByIdAndDelete(req.params.id)
    .then(() => res.json('speaker deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Speaker.findById(req.params.id)
    .then(speaker => {
      speaker.username = req.body.username;
      speaker.description = req.body.description;
      speaker.duration = Number(req.body.duration);
      speaker.date = Date.parse(req.body.date);

      speaker.save()
        .then(() => res.json('speaker updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;