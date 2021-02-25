<template>
  <div>
    
    <sui-dropdown
    
    placeholder= rec.character
    selection
    :options="options"
    v-model="current"
    

    />

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
    };
  },
  methods: {
    modyRec(){
      this.rec.character=this.current[0];
      this.rec.characterSrc=this.current[1];
    },
    
  },
  watch: {
    'current':function(){
      this.modyRec()
    }
  },
  async mounted() {
    //this.current = [this.rec.character,this.rec.characterSrc];
  }
};
</script>

<style scoped>


</style>