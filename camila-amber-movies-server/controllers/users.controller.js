import User from "../models/user.model.js";

export default class UsersController {
  static getUsers(req, res, next) {
    User.find()
      .then((users) => res.json(users))
      .catch(() => next());
  }

  static getUserById(req, res, next) {
    const id = req.params.id || {};
    User.findById(id)
      .then((user) => res.json(user))
      .catch(() => next());
  }

  static addUser(req, res, next) {
    const user = new User(req.body);

    user
      .save()
      .then(() => res.json(user))
      .catch(() => next());
  }

  static updateUser(req, res, next) {
    const { _id, name, email, password, role } = req.body;

    User.findById(_id)
      .then((user) => {
        user.name = name;
        user.email = email;
        user.password = password;
        user.role = role;

        user
          .save()
          .then(() => res.json(user))
          .catch(() => next());
      })
      .catch(() => next());
  }

  static deleteUser(req, res, next) {
    const id = req.params.id || {};
    User.findByIdAndDelete(id)
      .then(() => res.json({ status: "success" }))
      .catch(() => next());
  }
}
