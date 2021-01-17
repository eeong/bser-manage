r<template>
  <div>
    <h1>Search</h1>
    <form @submit="onSearch" >
      <input type="text" v-model="user.id" class="form-control col-md-8 mr-4" style="display:inline-block">
      <button type="submit" class="btn btn-info col-md-1 py-1" style="display:inline-block" >검색 
      </button>
    </form>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'search-form',
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {
        return {
          id: ''
          
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSearch: function() {
      if (this.user.id === '') {
        this.errorsPresent = true;
      } else {
        this.$router.push(`/search/${this.user.id}`);
      }
    }
  },
  async mounted() {
    this.search_data = await api.search();
  }
};
  

</script>

