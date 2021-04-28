const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

exports.signup = (req, res) => {
  res.header("Access-Control-Allow-Origin","*");
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.status(400).json({
        header: { 
          error: 1,
          message: "User already registered",
        },
      });

    const { firstName, lastName, username, email, password } = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    const _user = new User({
      firstName,
      lastName,
      username,
      email,
      hash_password
    });

    _user.save((error, user) => {
      if (error) {
        return res.status(400).json({
          header: {
            error: 1,
            message: "Something went wrong",
          },
        });
      }

      if (user) {
        const token = generateJwtToken(user._id, user.role);
        const { _id, firstName, lastName,username, email, role, fullName } = user;
        return res.status(201).json({
          header: {
            error: 0,
            message: "User Successfully Created",
            token: token,
          },
          body: {
            id: _id,
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            fullName: fullName,
            role: role,
          },
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  res.header('Access-Control-Allow-Origin','*');
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error)
      return res.status(400).json({
        header: {
          error: 1,
          message: "Error Occurred",
        },
      });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = generateJwtToken(user._id, user.role);
        const { _id, firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          header: {
            error: 0,
            message: "Login Successful",
            token: token,
          },
          body: {
            id: _id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            fullName: fullName,
            role: role,
          },
        });
      } else {
        return res.status(400).json({
          header: {
            error: 1,
            message: "Invalid Password",
          },
        });
      }
    } else {
      return res.status(400).json({
        header: {
          error: 1,
          message: "Something went wrong",
        },
      });
    }
  });
};

exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
  } else {
    return res.status(400).json({
      header: {
        error: 1,
        message: "Token Authentication Failed",
      },
    });
  }
  next();
};

exports.profile = async (req, res) => {
  User.findOne({ _id: req.user._id }).exec((error, user) => {
    if (error)
      return res.status(400).json({
        header: {
          error: 1,
          message: "Error Occurred",
        },
      });
    if (user) {
      const { _id, firstName, lastName, email, role, fullName } = user;
      res.status(200).json({
        header: {
          error: 0,
          message: "Sucessful",
        },
        body: {
          id: _id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          fullName: fullName,
          role: role,
        },
      });
    }
  });
};
