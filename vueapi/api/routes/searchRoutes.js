const taskBuilder = require('../controllers/taskController');
const search = require('../controllers/searchController');

module.exports = app => {
  app
    .route('/search')
    .get(search)
    //.post(taskBuilder.create_a_task);

  app
    .route('/saerch/:searchId')
    .get(taskBuilder.read_a_task)
    .put(taskBuilder.update_a_task)
    .delete(taskBuilder.delete_a_task);
};