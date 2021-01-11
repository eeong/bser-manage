<template>
  <div>
    <h1>Search</h1>
    <form @onSearch="onSearch"><input type="text" class="form-control col-md-8 mr-4" style="display:inline-block"><button class="btn btn-info col-md-1 py-1" style="display:inline-block">검색</button></form>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'tasks',
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    async onSearch(id) {
      return id;
    }
  },
  async mounted() {
    this.tasks = await api.gettasks();
  }
};
</script>

