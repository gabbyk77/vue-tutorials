const app = Vue.createApp({
  //template: '<h2>I am the template</h2>'
  data() {
    return {
      //creating an object with the curly brackets ^
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        {title: 'name of the wind', author: 'patrick rothfuss', img: 'img/xiao1.jpg', isFav: true},
        {title: 'the way of kings', author: 'brandon sanderson', img: 'img/genshin.jpg', isFav: false},
        {title: 'the final empire', author: 'snjdavkdvnfd', img: 'img/gens.jpg', isFav: true},
      ]
      // title: 'Naruto',
      // author: 'Masashi Kishimoto',
      // age: 45,
      // x: 0,
      // y: 0
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },

    // changeTitle(abc) {
    //   this.title = 'Words of Radiance'
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
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})

app.mount('#app')
