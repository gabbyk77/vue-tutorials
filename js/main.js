const app = Vue.createApp({
  //template: '<h2>I am the template</h2>'
  data() {
    return {
      //creating an object with the curly brackets ^
      showBooks: true,
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      age: 45
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
    // changeTitle(abc) {
    //   //this.title = 'Words of Radiance'
    //   this.title = abc
    //}
  }
})

app.mount('#app')
