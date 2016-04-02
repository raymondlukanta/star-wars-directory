import { Schema, arrayOf } from 'normalizr';

function generateId(entity) { 
	return entity.url.split("/")[5]
}

const peopleSchema = new Schema('people', {
  idAttribute: generateId
});

export const Schemas = {
  PEOPLE: peopleSchema,
  PEOPLE_ARRAY: arrayOf(peopleSchema),
};