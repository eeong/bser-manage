const recBuilder = require('../controllers/recController');
const searchApi = require('../controllers/searchController');


module.exports = app => {
  app
    .route('/recs')
    .get(recBuilder.list_all_recs)
    .post(recBuilder.create_a_rec);
    
  app
    .route('/recs/item')
    .get(recBuilder.read_itemArmor);

  app
    .route('/recs/:recId')
    .get(recBuilder.read_a_rec)
    .put(recBuilder.update_a_rec)
    .delete(recBuilder.delete_a_rec);

  app
    .route('/search')
    .get(searchApi.read_rank);

  app
    .route('/search/:user')
    .get(searchApi.read_user_num);

  app
    .route('/search/:user/:mode')
    .get(searchApi.read_user_rank);
  
};