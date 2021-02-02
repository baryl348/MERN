import { Router } from "express";
import User from "../schema&model/user.js";
import bcrypt from "bcryptjs";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import config from "../config/default.json";

const router = Router();

// /api/auth/registration
router.post(
  "/registration",
  [
    check("firstName", "Некорректное имя").isString(),
    check("secondName", "Некорректная фамилия").isString(),
    check("email", "Некорректный email").isEmail(),
    check("password", "Максимальная длина пароля 30").isLength({ max: 30 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Данные введены некорректно!",
        });
      }
      const { firstName, secondName, email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует" });
      }
      const hashedPassword = await bcrypt.hash(password, 18);
      const user = new User({
        firstName,
        secondName,
        email,
        password: hashedPassword,
      });
      await user.save();
      res.status(201).json({ message: "Пользователь успешно создан" });
    } catch (error) {
      res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
    }
  }
);
// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Некорректный email").normalizeEmail().isEmail(),
    check("password", "Максимальная длина пароля 30")
      .isLength({ max: 30 })
      .exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Ошибка авотризации",
        });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }
      const isSuccessPassword = bcrypt.compare(password, user.password);
      if (!isSuccessPassword) {
        return res.status(400).json({ message: "Пароль введен не верно" });
      }
      // expiresIn сколько будет существовать токен
      const token = jwt.sign({ userId: user.id }, config.get("jwtSecretKey"), {
        expiresIn: "1h",
      });
      res.json({ token, userId: user.id });
    } catch (error) {
      res.status(500).json({ message: "Что-то пошло не так попробуйте снова" });
    }
  }
);

export default router;
