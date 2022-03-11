const app = Vue.createApp({
  //template: '<h2>I am the template</h2>'
  data() {
    return {
      //creating an object with the curly brackets ^
      showBooks: true,
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      age: 45,
      x: 0,
      y: 0
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    // changeTitle(abc) {
    //   //this.title = 'Words of Radiance'
    //   this.title = abc

    handleEvent(e, data) {
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app')
