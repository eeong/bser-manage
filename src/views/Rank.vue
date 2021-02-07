<template>
  <div>
    <h1 v-if="rank != null">랭크: {{mode[rank.userRank.mode]}}모드</h1>
    <div v-if="rank == null">해당 모드에서 랭크게임 기록이 존재하지 않습니다.</div>
    <div v-if="rank != null" class="ui card">
    
    <div class="image"><img class="ui small image" src="../img/nadine.png" style="opacity: 1;"></div>
    <div class="content ">
    <div class="header">{{rank.userRank.nickname}}</div>
    <div class="meta">
      {{rank.userRank.rank}}위
    </div>
  </div>
  <div class="extra content">
    MMR:{{rank.userRank.mmr}}
  </div>
  </div>
</div>
  
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'rank',
  components: {
    
  },
  data(){
    return {
      user:null,
      rank:null,
      mode:["unknown","솔로","듀오","스쿼드"],
    }
  },
  methods: {
    
  },
  async mounted(){
    this.rank = await api.searchRank(this.$route.params.userId, this.$route.params.gameMode )
  }
};
</script>