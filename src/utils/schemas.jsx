import { Schema, arrayOf } from 'normalizr';

function generateId(entity) { 
	return entity.url.split("/")[5]
}

const peopleSchema = new Schema('people', {
  idAttribute: generateId
});

const filmsSchema = new Schema('films', {
  idAttribute: generateId
});

const planetsSchema = new Schema('planets', {
  idAttribute: generateId
});

const speciesSchema = new Schema('species', {
  idAttribute: generateId
});

const starshipsSchema = new Schema('starships', {
  idAttribute: generateId
});

const vehiclesSchema = new Schema('vehicles', {
  idAttribute: generateId
});

export const Schemas = {
  PEOPLE: peopleSchema,
  PEOPLE_ARRAY: arrayOf(peopleSchema),
  FILMS: filmsSchema,
  FILMS_ARRAY: arrayOf(filmsSchema),
  PLANETS: planetsSchema,
  PLANETS_ARRAY: arrayOf(planetsSchema),
  SPECIES: speciesSchema,
  SPECIES_ARRAY: arrayOf(speciesSchema),
  STARSHIPS: starshipsSchema,
  STARSHIPS_ARRAY: arrayOf(starshipsSchema),
  VEHICLES: vehiclesSchema,
  VEHICLES_ARRAY: arrayOf(vehiclesSchema),
};