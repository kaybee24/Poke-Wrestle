import { getAllPokemons, getOnePokemon, getOnePokemonsCategory } from './controller.js';
import express from 'express';

const pokeRouter = express.Router();

pokeRouter.get('/', getAllPokemons);
pokeRouter.get('/:id', getOnePokemon);
pokeRouter.get('/:id/:info', getOnePokemonsCategory);

export default pokeRouter;
