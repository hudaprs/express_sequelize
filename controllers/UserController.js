const User = require('../models').User

exports.index = (req, res, next) => {
  User.findAll()
  .then(users => {
    res.render('pages/users', {
      title: 'Users',
      url: '/users',
      users
    })
  })
  .catch(err => console.log(err))
}

exports.create = (req, res, next) => {
  res.render('pages/users/create', {
    title: 'User Create',
    url: '/users'
  })
} 

exports.store = (req, res, next) => {
  const { name, username, password } = req.body
  User.create({
    name,
    username,
    password
  })
  .then(user => {
    console.log('User created')
    res.redirect('/users')
  })
  .catch(err => console.log(err))
}

exports.show = (req, res, next) => {
  const { id } = req.params
  User.findByPk(id)
  .then(user => {
    if(!user) {
      res.redirect('/users')
    } else {
      res.render('pages/users/show', {
        title: `Detail ${user.name}`,
        url: '/users',
        user
      })
    }
  })
  .catch(err => console.log(err))
}

exports.edit = (req, res, next) => {
  const { id } = req.params
  User.findByPk(id)
  .then(user => {
    if(!user) {
      res.redirect('/users')
    } else {
      res.render('pages/users/edit', {
        title: `Edit ${user.name}`,
        url: '/users',
        user
      })
    }
  })
  .catch(err => console.log(err))
}

exports.update = (req, res, next) => {
  const { id, name, username } = req.body
  User.findByPk(id)
  .then(user => {
    if(!user) {
      user.name = name,
      user.username = username
      return user.save()
    } else {
      res.redirect('/users')
    }
  })
  .then(result => {
    console.log('User Updated')
    res.redirect('/users')
  })
  .catch(err => console.log(err))
}

exports.destroy = (req, res, next) => {
  const { id } = req.body
  User.findByPk(id)
  .then(user => {
    return user.destroy()
  })
  .then(result => {
    console.log('User Deleted')
    res.redirect('/users')
  })
  .catch(err => console.log(err))
}