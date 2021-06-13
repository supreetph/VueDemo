const Counter = {
    data() {
      return {
        counter: 0,
        message:"Hey Supreet, this is Vue"
      }
    },
    methods:{
        changeTitle(){
            this.message="this is new title"
        }
    }
  }
  
  Vue.createApp(Counter).mount('#counter')