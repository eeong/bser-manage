import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3500,
    pauseOnInteract: true
  }
});

const vm = new Vue();
const baseURL = 'http://localhost:3000/recs/'//'https://eeong.be/bser/recs/';
const bsURL = 'http://localhost:3000/search/'//'https://eeong.be/bser/search/';


const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  getarmor: handleError(async () => {
    const res = await axios.get(baseURL+'armor' );
    return res.data;
  }),
  getweapon: handleError(async type => {
    const res = await axios.get(baseURL+'weapon/'+ type);
    return res.data;
  }),
  getitem:handleError(async (type, code) => {
    const res = await axios.get(baseURL+'getitem/'+type+'/'+code);
    return res.data;
  }),
  getrec: handleError(async payload => {
    const res = await axios.get(baseURL + payload);
    return res.data;
  }),
  getrecs: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deleterec: handleError(async payload => {
    const res = await axios.delete(baseURL + payload._id);
    return res.data;
  }),
  createrec: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updaterec: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  }),
  search: handleError(async rankMode => {
    const res = await axios.get(bsURL + '?m=' + rankMode);
    if(res.code==429) location.redirect('/');
    return res.data;
  }),
  searchId: handleError(async userid => {
    const res = await axios.get(bsURL + userid);
    return res.data;
  }),
  searchRank: handleError(async (userid, gameMode) => {
    const res = await axios.get(bsURL + userid + '/' + gameMode);
    return res.data;
  }),
  searchMmr: handleError(async (usernum,gameMode) => {
    const res = await axios.get(bsURL+'rank/'+usernum+'/'+gameMode);
    return res.data;
  }),
};
