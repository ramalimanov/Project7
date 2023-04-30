const UserReadPost = require("../models/userReadPost");

exports.isRead = (req, res, next) => {
  UserReadPost.findOne({
    where: {
      userId: req.auth.userId,
      postId: req.params.postId,
    },
  })
    .then((read) => res.send(200).json({ read: true }))
    .catch((error) => res.send(404).json(error));
};

exports.read = (req, res, next) => {
  UserReadPost.create({
    userId: req.auth.userId,
    postId: req.params.postId,
  })
    .then((read) => res.send(201).json({ read: true }))
    .catch((error) => res.send(400).json(error));
};
