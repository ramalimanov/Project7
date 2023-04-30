const Post = require("../models/post");

// Greating Post
exports.createPost = (req, res, next) => {
  req.body.post = JSON.parse(req.body.post);
  const url = req.protocol + "://" + req.get("host"); // Building url
  const post = new Post({
    userId: req.body.post.userId,
    name: req.body.post.name,
    description: req.body.post.description,
    imageUrl: url + "/images/" + req.file.filename,
  });
  post
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

// https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
exports.getAllpost = (req, res, next) => {
  Post.findAll()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
