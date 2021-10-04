const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

router.get('/movie-poop/:id', (req, res) => {
  const queryText = `
  SELECT "genres"."name" FROM "genres"
  JOIN "movies_genres"
  ON "genres"."id" = "movies_genres"."genre_id"
  JOIN "movies"
  ON "movies"."id" = "movies_genres"."movie_id"
  WHERE "movies"."id" = $1;`;

  pool.query( queryText, [ req.params.id ]).then(( result ) => {
    res.send( result.rows )
  }).catch(( error ) => {
    console.log('Error in Router.get', error);
    res.sendStatus(500)
  });
});

module.exports = router;