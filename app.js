const Counter = {
    data() {
      return {
        counter: 0,
        message:"Hey Supreet, this is Vue",
        blogUrl:"https://theonlysup.wordpress.com",
        customers:[
            {
                name:"tom",
                city:"bangalore"
            },
            {
                name:"harry",
                city:"Delhi"
            },
            {
                name:"sally",
                city:"Mumbai"
            }
            
        ]
      }
    },
    methods:{
        changeTitle(value){
            this.message=value
        }
       
    }
  }
  
  Vue.createApp(Counter).mount('#counter')