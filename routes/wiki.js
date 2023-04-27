
const router = require('express').Router();
const { Page } = require("../models");
const { addPage } = require("../views");


router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  const title = req.body.title
  const content = req.body.content

  try {
    const page = await Page.create({
      title: title,
      //content: content
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) { 
    next(error) 
}
});

router.get("/add", (req, res) => {
  res.send(addPage());
  console.log(req.body)
});

router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/');
  });
router.post('/', (req, res, next) => {
    res.send('got to POST /wiki/');
  });
  
  router.get('/add', (req, res, next) => {
    res.send('got to GET /wiki/add');
  });

module.exports = router;