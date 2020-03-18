const Category = require('../models').Category

exports.index = (req, res, next) => {
  Category.findAll()
  .then(categories => {
    res.render('pages/categories', {
      title: 'Categories',
      url: '/categories',
      categories
    })
  })
  .catch(err => console.log(err))  
}

exports.create = (req, res, next) => {
  res.render('pages/categories/create', {
    title: 'Create Category',
    url: '/categories'
  })
}

exports.store = (req, res, next) => {
  const { name } = req.body
  Category.create({
    name
  })
  .then(category => {
    console.log('Category Created')
    res.redirect('/categories')
  })
  .catch(err => console.log(err))
}

exports.show = (req, res, next) => {  
  const { id } = req.params
  Category.findByPk(id)
  .then(category => {
    if(!category) {
      res.redirect('/categories')
    } else {
      let categoryCreatedAt = new Date(category.createdAt)
      res.render('pages/categories/show', {
        title: `Detail ${category.name}`,
        url: '/categories',
        date: categoryCreatedAt.getDate() + '-' + categoryCreatedAt.getMonth() + '-' + categoryCreatedAt.getFullYear(), 
        category
      })
    }
  })
  .catch(err => console.log(err))
}

exports.edit = (req, res, next) => {
  const { id } = req.params
  Category.findByPk(id)
  .then(category => {
    if(!category) {
      res.redirect('/categories')
    } else {
      res.render('pages/categories/edit', {
        title: `Edit ${category.name}`,
        url: '/categories',
        category
      })
    }
  })
  .catch(err => console.log(err))
}

exports.update = (req, res, next) => {
  const { id, name } = req.body
  Category.findByPk(id)
  .then(category => {
    if(!category) {
      res.redirect('/categories')
    } else {
      category.name = name
      return category.save()
    }
  })
  .then(result => {
    res.redirect('/categories')
  })
  .catch(err => console.log(err))
}

exports.destroy = (req, res, next) => {
  const { id } = req.body
  Category.findByPk(id)
  .then(category => {
    return category.destroy()
  })
  .then(result => {
    res.redirect('/categories')
  })
  .catch(err => console.log(err))
}

