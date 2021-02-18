const mongoose = require('mongoose');
const rec = mongoose.model('game');
const itemA = mongoose.model('itemArmor')
const itemW = mongoose.model('itemWeapon')

exports.read_itemArmor = (req, res) => {
  itemA.find({}, (err, armors) => {
    if (err) res.send(err);
    res.json(armors);
  });
};

exports.read_itemWeapon = (req, res) => {
  itemW.find({}, (err, weapons) => {
    if (err) res.send(err);
    res.json(weapons);
  });
};

exports.list_all_recs = (req, res) => {
  rec.find({}, (err, recs) => {
    if (err) res.send(err);
    res.json(recs);
  });
};

exports.create_a_rec = (req, res) => {
  console.log(req.body);
  const newRec = new rec(req.body);
  newRec.save((err, rec) => {
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