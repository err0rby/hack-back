const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.users = {
  getUsers: async (req, res) => {
    const users = await User.find().populate("bascket");
    res.json(users);
  },
  
  updateUser: async (req, res) => {
    const {
      name,
      surname,
      title,
      raiting,
      phone,
      mail,
      login,
      password,
      role,
      bankCard,
      logo,
    } = req.body;
    const data = await User.findByIdAndUpdate(
      req.params.id,
      {
        role,
        name,
        surname,
        phone,
        mail,
        title,
        raiting,
      },
      { new: true }
    );
    res.json(data);
  },
    
  getAuthUser: async (req, res) => {
    const users = await User.findById(req.params.id).populate("bascket");
    res.json(users)
  },

  getPatchUser: async (req, res) => {
    const users = await User.findByIdAndUpdate(req.params.id,{$set:{name: req.body.name, surname:req.body.surname,mail:req.body.mail,phone:req.body.phone}}).populate("bascket");
    res.json(users)
  },

  login: async (req, res) => {
    const { login, password } = req.body;
    const candidate = await User.findOne({ login });

    if (!candidate) {
      return res.status(404).json({ error: "User not find" });
    }

    const valid = await bcrypt.compareSync(password, candidate.password);

    if (!valid) {
      return res.status(404).json({ error: "password wrong" });
    }
    const payload = {
      id: candidate._id,
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "95h",
    });
    res.json({
      token,
      id: candidate._id,

      user:candidate

      role: candidate.role,
    });
  },
  auth: async (req, res) => {
    try {
      const { login, password } = req.body;
      const hash = await bcrypt.hashSync(password, 7);
      const user = await User.create({
        role: req.body.role,
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone,
        mail: req.body.mail,
        login: login,
        password: hash,
      });
      res.json(user);
    } catch (e) {
      res.json({ error: e });
    }
  },

  getOneUser: async (req, res) => {
    try {
      const data = await User.find({ role: "Фермер" });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },

  addUser: async (req, res) => {
    const { name, surname, raiting, login, password, role, bankCard, logo } =
      req.body;
    const brands = await User.create({
      name,
      surname,
      raiting,
      login,
      password,
    });
    const result = await brands;
    res.json(result);
  },
  addFollower: async (req, res) => {
    const { idUser, myId } = req.body;
    const user = await User.findById(idUser);
    const Myuser = await User.findById(myId);
    await user.updateOne({ $addToSet: { followers: Myuser } });
    await Myuser.updateOne({ $addToSet: { mySubscribers: user } });
    res.json("Успешно");
  },
  addProductToBascket: async (req, res) => {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { bascket: req.body.bascket },
      },
      { new: true }
    );
    const result = await user.populate("bascket");
    res.json(result);
  },

  rateMovie: async (req, res) => {
    const { fermerId, rating,id } = req.body;
    console.log(fermerId,rating,id)
   
    try {
      const fermer = await User.findById(fermerId);
      let find = fermer.ratedUsers.find((item) => String(item.user) === id);
      if (!find) {
        await fermer.updateOne({
          $push: { ratedUsers: { user: id, rating } },
        });
        if (fermer.rating !== 0) {
          const sum = fermer.ratedUsers.reduce((acc, element) => {
            return acc + Number(element.rating);
          }, 0);
          await fermer.updateOne({
            rating: (
              (sum + Number(rating)) /
              (fermer.ratedUsers.length + 1)
            ).toFixed(1),
          });
        } else {
          await fermer.updateOne({
            rating: rating,
          });
        }
      } else {
        fermer.ratedUsers = fermer.ratedUsers.map((item) => {
          if (String(item.user) === id) {
            item.rating = rating;
          }
          return item;
        });
        await fermer.save();
        const sum = fermer.ratedUsers.reduce((acc, element) => {
          return acc + Number(element.rating);
        }, 0);
        await fermer.updateOne({
          rating: (sum / movie.ratedUsers.length).toFixed(1),
        });
      }

      return res.json(await User.findById(fermer));
    } catch (e) {
      return res.json({ error: `ошибка при попытке оставить оценку: ${e}` });
    }
  },

};
