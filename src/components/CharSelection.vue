<template>
  <div>
    
    <sui-dropdown
    
    placeholder= '캐릭터 선택'
    selection
    :options="options"
    v-model="current"

    />

    <select class="ui search dropdown" v-model="currentW">
      <option :value="v" v-for="(v,i) in optionsW" :key="i">{{v}}</option>
    </select>

  </div>
</template>

<script>

export default {
  name: 'char-selection',
  props: {
    rec:{type:Object},
  },
  
  data: function() {
    return {
      current: null,
      currentW: null,
      options: [
        {
          key: '6',
          text: '나딘',
          value: ['나딘','006.Nadine-나딘.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/006.Nadine-나딘.png`) },
        },
        {
          key: '20',
          text: '레녹스',
          value: ['레녹스','020.Lenox-레녹스.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/020.Lenox-레녹스.png`) },
        },
        {
          key: '21',
          text: '로지',
          value: ['로지','21.Rozzi-로지.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/21.Rozzi-로지.png`) },
        },
        {
          key: '22',
          text: '루크',
          value: ['루크','022.Luke-루크.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/022.Luke-루크.png`) },
        },
        {
          key: '10',
          text: '리다이린',
          value: ['리다이린','010.LiDailin-리다이린.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/010.LiDailin-리다이린.png`) },
        },
        {
          key: '4',
          text: '매그너스',
          value: ['매그너스','004.Magnus-매그너스.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/004.Magnus-매그너스.png`) },
        },
        {
          key: '13',
          text: '쇼우',
          value: ['쇼우','013.Xiukai-쇼우.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/013.Xiukai-쇼우.png`) },
        },
        {
          key: '18',
          text: '쇼이치',
          value: ['쇼이치','018.Shoichi-쇼이치.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/018.Shoichi-쇼이치.png`) },
        },
        {
          key: '15',
          text: '시셀라',
          value: ['시셀라','015.Sissela-시셀라.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/015.Sissela-시셀라.png`) },
        },
        {
          key: '16',
          text: '실비아',
          value: ['실비아','016.Silvia-실비아.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/016.Silvia-실비아.png`) },
        },
        {
          key: '17',
          text: '아드리아나',
          value: ['아드리아나','017.Adriana-아드리아나.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/017.Adriana-아드리아나.png`) },
        },
        {
          key: '2',
          text: '아야',
          value: ['아야','002.Aya-아야.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/002.Aya-아야.png`) },
        },
        {
          key: '9',
          text: '아이솔',
          value: ['아이솔','009.Isol-아이솔.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/009.Isol-아이솔.png`) },
        },
        {
          key: '19',
          text: '엠마',
          value: ['엠마','019.Emma-엠마.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/019.Emma-엠마.png`) },
        },
        {
          key: '11',
          text: '유키',
          value: ['유키','011.Yuki-유키.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/011.Yuki-유키.png`) },
        },
        {
          key: '5',
          text: '자히르',
          value: ['자히르','005.Zahir-자히르.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/005.Zahir-자히르.png`) },
        },
        {
          key: '1',
          text: '재키',
          value: ['재키','001.Jackie-재키.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/001.Jackie-재키.png`) },
        },
        {
          key: '23',
          text: '캐시',
          value: ['캐시','023. Cathy - 캐시.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/023. Cathy - 캐시.png`) },
        },
        {
          key: '14',
          text: '키아라',
          value: ['키아라','014.Chiara-키아라.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/014.Chiara-키아라.png`) },
        },
        {
          key: '3',
          text: '피오라',
          value: ['피오라','003.Fiora-피오라.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/003.Fiora-피오라.png`) },
        },
        {
          key: '8',
          text: '하트',
          value: ['하트','008.Hart-하트.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/008.Hart-하트.png`) },
        },
        {
          key: '7',
          text: '현우',
          value: ['현우','007.Hyunwoo-현우.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/007.Hyunwoo-현우.png`) },
        },
        {
          key: '12',
          text: '혜진',
          value: ['혜진','012.Hyejin-혜진.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/012.Hyejin-혜진.png`) },
        },
      ],
      optionsW: this.weaponMatch(this.rec.character)
    };
  },
  methods: {
    modyRec(){
      this.rec.character=this.current[0];
      this.rec.characterSrc=this.current[1];
    },
    weaponMatch(match){
      let list ={"나딘":['활','석궁'],"레녹스":["채찍"],"로지":["권총"],"루크":["방망이"],"리다이린":["글러브","쌍절곤"],"매그너스":["망치","방망이"],"쇼우":["단검","창"],"쇼이치":["단검"],"시셀라":["투척","암기"],"실비아":["권총"],"아드리아나":["투척"],"아야":["권총","돌격소총","저격총"],"아이솔":["권총","돌격소총"],"엠마":["암기"],"유키":["양손검"],"자히르":["투척","암기"],"재키":["단검","양손검","도끼"],"캐시":["단검"],"키아라":["레이피어"],"피오라":["레이피어","양손검","창"],"하트":["기타"],"현우":["글러브","톤파"],"혜진":["암기","활"]}
      return list[match]
    }
    
  },
  
  watch: {
    'current':function(){
      let charcon=confirm("캐릭터를 변경하면 현재 아이템트리가 삭제됩니다.");
      if(charcon) {this.modyRec(); this.optionsW = this.weaponMatch(this.current[0])}
      
    },
    'currentW': function(){
      this.rec.weapon = this.currentW;
    }
  },
  async mounted() {
    this.currentW = this.src.weapon;
  }
};
</script>

<style scoped>


</style>