const knex = require('../connection');

function getAllMovies() {
  return knex('movies')
  .select('*');
}

module.exports = {
  getAllMovies()
};

//For a single movie
function getSingleMovie(id) {
  return knex('movies')
  .select('*')
  .where({ id: parseInt(id) });
}

module.exports = {
  getAllMovies,
  getSingleMovie,
};


function addMovie(movie) {
  return knex('movies')
  .insert(movie)
  .returning('*');
}

function updateMovie(id, movie) {
  return knex('movies')
  .update(movie)
  .where({ id: parseInt(id) })
  .returning('*');
}

function deleteMovie(id) {
  return knex('movies')
  .del()
  .where({ id: parseInt(id) })
  .returning('*');
}

module.exports = {
  getAllMovies,
  getSingleMovie,
  addMovie,
  updateMovie,
  deleteMovie
};
