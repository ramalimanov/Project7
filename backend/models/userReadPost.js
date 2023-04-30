const sequelize = require("../config/database.js");
const { DataTypes } = require("sequelize");
const User = require("./user");
const Post = require("./post");
const UserReadPost = sequelize.define("UserReadPost", {
  PostId: {
    type: DataTypes.INTEGER,
    references: {
      model: Post, // 'Posts' would also work
      key: "id",
    },
  },
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: User, // 'Actors' would also work
      key: "id",
    },
  },
});
User.belongsToMany(Post, { through: "UserReadPost" });
Post.belongsToMany(User, { through: "UserReadPost" });

module.exports = UserReadPost;
