<template>
  <div>
    
    <sui-dropdown
    
    placeholder= '캐릭터 선택'
    selection
    search
    :options="options"
    v-model="currentChar"

    />

    <select class="ui dropdown" v-model="rec.weapon" >
      <option :value="v" v-for="(v,i) in optionsW" :key="i">
        {{v}}
      </option>
      
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
      currentChar: null,
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
          key: '29',
          text: '레온',
          value: ['레온','029. Leon - 레온.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/029. Leon - 레온.png`) },
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
          key: '31',
          text: '리오',
          value: ['리오','031. Rio-리오.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/031. Rio-리오.png`) },
        },
        {
          key: '4',
          text: '매그너스',
          value: ['매그너스','004.Magnus-매그너스.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/004.Magnus-매그너스.png`) },
        },
        {
          key: '26',
          text: '바바라',
          value: ['바바라','026. Barbara - 바바라.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/026. Barbara - 바바라.png`) },
        },
        {
          key: '25',
          text: '버니스',
          value: ['버니스','025. Bernice - 버니스.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/025. Bernice - 버니스.png`) },
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
          key: '28',
          text: '수아',
          value: ['수아','028. Sua - 수아.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/028. Sua - 수아.png`) },
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
          key: '24',
          text: '아델라',
          value: ['아델라','024. Adela - 아델라.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/024. Adela - 아델라.png`) },
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
          key: '27',
          text: '알렉스',
          value: ['알렉스','027. Alex-알렉스.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/027. Alex-알렉스.png`) },
        },

        {
          key: '19',
          text: '엠마',
          value: ['엠마','019.Emma-엠마.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/019.Emma-엠마.png`) },
        },
        {
          key: '32',
          text: '윌리엄',
          value: ['윌리엄','032. William - 윌리엄.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/032. William - 윌리엄.png`) },
        },
        {
          key: '11',
          text: '유키',
          value: ['유키','011.Yuki-유키.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/011.Yuki-유키.png`) },
        },
        {
          key: '30',
          text: '일레븐',
          value: ['일레븐','030. Eleven-일레븐.png'],
          image: { avatar: true, src: require(`../assets/static/img/00.캐릭터/030. Eleven-일레븐.png`) },
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
      optionsW: this.weaponMatch(this.rec.character),
      
    };
  },
  methods: {
    modyRec(){
      this.rec.character=this.currentChar[0];
      this.rec.characterSrc=this.currentChar[1];
    },
    weaponMatch(match){
      let list ={"나딘":['활','석궁'],"레녹스":["채찍"],"레온":["글러브"],"로지":["권총"],"루크":["방망이"],"리다이린":["글러브","쌍절곤"],"리오":["활"],"매그너스":["망치","방망이"],"바바라":["방망이"],"버니스":["저격총"],"쇼우":["단검","창"],"쇼이치":["단검"],"수아":["망치"],"시셀라":["투척","암기"],"실비아":["권총"],"아델라":["레이피어"],"아드리아나":["투척"],"아야":["권총","돌격소총","저격총"],"아이솔":["권총","돌격소총"],"알렉스":["권총","양손검","암기","톤파"],"엠마":["암기"],"윌리엄":["투척"],"유키":["양손검"],"일레븐":["망치"],"자히르":["투척","암기"],"재키":["단검","양손검","도끼"],"캐시":["단검"],"키아라":["레이피어"],"피오라":["레이피어","양손검","창"],"하트":["기타"],"현우":["글러브","톤파"],"혜진":["암기","활"]}
      return list[match]
    },
  },
  
  watch: {
    'currentChar':function(){
      let charcon=confirm("캐릭터를 변경하면 현재 아이템트리가 삭제됩니다.");
      if(charcon) { 
      this.modyRec(); 
      this.optionsW = this.weaponMatch(this.currentChar[0]); 
      this.rec.weapon = this.optionsW[0]
      this.rec.item = [];
      }
      
    },
  },
  async mounted() {
    
  }
};
</script>

<style scoped>


</style>