const mongoose = require('mongoose');
const rec = mongoose.model('game');

exports.list_all_recs = (req, res) => {
  rec.find({}, (err, recs) => {
    if (err) res.send(err);
    res.json(recs);
  });
};

exports.create_a_rec = (req, res) => {
  console.log(req.body);
  const newrec = new rec(req.body);
  newrec.save((err, rec) => {
    if (err) res.send(err);
    res.json(rec);
  });
};

exports.read_a_rec = (req, res) => {
  rec.findById(req.params.recId, (err, rec) => {
    if (err) res.send(err);
    res.json(rec);
  });
};

exports.update_a_rec = (req, res) => {
  rec.findOneAndUpdate(
    { _id: req.params.recId },
    req.body,
    { new: true },
    (err, rec) => {
      if (err) res.send(err);
      res.json(rec);
    }
  );
};

exports.delete_a_rec = (req, res) => {
  rec.deleteOne({ _id: req.params.recId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'rec successfully deleted',
      _id: req.params.recId
    });
  });
};