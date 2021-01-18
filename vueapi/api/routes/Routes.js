const taskBuilder = require('../controllers/taskController');
const searchApi = require('../controllers/searchController');


module.exports = app => {
  app
    .route('/tasks')
    .get(taskBuilder.list_all_tasks)
    .post(taskBuilder.create_a_task);

  app
    .route('/tasks/:taskId')
    .get(taskBuilder.read_a_task)
    .put(taskBuilder.update_a_task)
    .delete(taskBuilder.delete_a_task);

  app
    .route('/search')
    .get(searchApi.read_user_num);

  app
    .route('/search/:user')
    .get(searchApi.read_user_num);
    
  
};