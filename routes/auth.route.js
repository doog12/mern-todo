const { Router } = require('express')
const router = Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
require('dotenv').config()


router.post('/registration',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Некорректный пароль').isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации',
        })
      }

      const { email, password } = req.body

      const isUsed = await User.findOne({ email })

      if (isUsed) {
        return res.status(300).json({ message: 'Пользователь с таким email уже существует' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)

      const user = new User({
        email,
        password: hashedPassword,
      })

      await user.save()

      res.status(201).json({ message: 'Пользователь успешно зарегистрирован' })
    } catch (error) {
      console.log(error)
    }
  },
)

router.post('/login',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Некорректный пароль').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при входе',
        })
      }

      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'Такой Email не существует' })
      }

      const isMatch = bcrypt.compare(password, user.password)
      if(!isMatch) {
        return res.status(400).json({ message: 'Такого пароля не существует' })
      }

      const jwtSecret = process.env.JWT_SECRET
      
      const token = jwt.sign(
        {userId: user.id},
        jwtSecret,
        {expiresIn: '1h'}
      )
      res.json({
        token, userId: user.id
      })

    } catch (error) {
      console.log(error)
    }
  },
)

module.exports = router
