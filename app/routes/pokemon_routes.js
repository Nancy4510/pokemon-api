const express = require('express')
const passport = require('passport')

const Pokemon = require('../models/pokemon')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// CREATE
// POST /pokemons
router.post('/pokemons', requireToken, (req, res, next) => {
  req.body.pokemon.owner = req.user.id
  Pokemon.create(req.body.pokemon)
    .then(pokemon => {
      res.status(201).json({ pokemon: pokemon.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /pokemons/
router.patch('/pokemons/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.pokemon.owner
  Pokemon.findById(req.params.id)
    .then(handle404)
    .then(pokemon => {
      requireOwnership(req, pokemon)
      return pokemon.updateOne(req.body.pokemon)
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// SHOW
// GET /pokemons/
router.get('/pokemons/:id', requireToken, (req, res, next) => {
  Pokemon.findById(req.params.id)
    .then(handle404)
    .then(pokemon => res.status(200).json({ pokemon: pokemon.toObject() }))
    .catch(next)
})

// INDEX
// GET /pokemons
router.get('/pokemons', (req, res, next) => {
  Pokemon.find()
    .populate('owner')
    .then(pokemons => {
      return pokemons.map(pokemon => pokemon.toObject())
    })
    .then(pokemons => res.status(200).json({ pokemons: pokemons }))
    .catch(next)
})

// DESTROY
// DELETE /pokemons/
router.delete('/pokemons/:id', requireToken, (req, res, next) => {
  Pokemon.findById(req.params.id)
    .then(handle404)
    .then(pokemon => {
      requireOwnership(req, pokemon)
      pokemon.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
