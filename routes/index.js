import express from 'express'

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', key: process.env.GOOGLE_MAP_KEY});
});

export default router;
