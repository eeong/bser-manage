<template>
  <div>
    <h1>템빌드저장소</h1>
    <table id="recs" class="ui celled compact table">
      <thead>
        <tr>
          <th> <i class="calendar plus icon"></i>Task</th>
          <th> <i class="info circle icon"></i>Detail</th>
                    <th> <i class="lock open icon"></i></th>
                    <th> <i class="edit icon"></i></th>
                    <th> <i class="trash icon"></i></th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(rec, i) in recs" :key="i">
        <td>{{ rec.nickname }}</td>
        <td>{{ rec.nickname }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: rec._id }}">Show</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: rec._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(rec._id)">
          <a :href="`/recs/${rec._id}`">Delete</a>
        </td>
      </tr>
    </table>
    <div>{{recs}}</div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'recs',
  data() {
    return {
      recs: [],
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deletetask(id);
      this.flash('task deleted sucessfully!', 'success');
      const newtasks = this.tasks.filter(task => task._id !== id);
      this.tasks = newtasks;
    }
  },
  async mounted() {
    this.recs = await api.getrecs();
    
  }
};
</script>