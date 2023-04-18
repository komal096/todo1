const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log('router loaded');

router.get('/',homeController.home);
router.post('/create_todo', homeController.createTodo);
router.get('/delete_content', homeController.delete_content);
router.get('/update_content/:id',homeController.update_content);
router.post('/update_content/:id',homeController.update_content);

module.exports = router;