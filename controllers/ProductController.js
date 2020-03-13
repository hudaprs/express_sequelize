const Product = require('../models').Product

exports.index = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('pages/products', {
      title: 'Products',
      url: '/products',
      products
    })
  })
  .catch(err => console.log(err))
}

exports.create = (req, res, next) => {
  res.render('pages/products/create', {
    title: 'Create Product',
    url: '/products'
  })
}

exports.store = (req, res, next) => {
  const { name, price, description } = req.body
  Product.create({
    name,
    price,
    description
  })
  .then(product => {
    console.log('Product Created')
    res.redirect('/products')
  })
  .catch(err => console.log(err))
}

exports.show = (req, res, next) => {
  const { id } = req.params
  Product.findByPk(id)
  .then(product => {
    if(!product) {
      res.redirect('/products')
    } else {
      res.render('pages/products/show', {
        title: `Detail ${product.name}`,
        url: '/products',
        product
      })
    }
  }).catch(err => console.log(err))
}

exports.edit = (req, res, next) => {
  const { id } = req.params
  Product.findByPk(id)
  .then(product => {
    if(!product) {
      res.redirect('/products')
    } else {
      res.render('pages/products/edit', {
        title: `Edit ${product.name}`,
        url: '/products',
        product
      })
    }
  })
  .catch(err => console.log(err))
}

exports.update = (req, res, next) => {
  const { id, name, price, description } = req.body
  Product.findByPk(id)
  .then(product => {
    product.name = name
    product.price = price
    product.description = description
    return product.save()
  })
  .then(result => {
    console.log('Product Updated')
    res.redirect('/products')
  })
  .catch(err => console.log(err))
}

exports.destroy = (req, res, next) => {
  const { id } = req.body
  Product.findByPk(id)
  .then(product => {
    return product.destroy()
  })
  .then(result => {
    console.log('Product removed')
    res.redirect('/products')
  })
  .catch(err => console.log(err))
}