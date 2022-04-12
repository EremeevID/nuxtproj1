import img1 from '~/assets/images/1.jpg'  //не нашел как лучше привязать картинки
import img2 from '~/assets/images/2.jpg'
import img3 from '~/assets/images/3.jpg'
export default {
  data() {
    return {
      url: 'http://www.google.com',
      showBooks: true,
      books: [
        { title: 'Двенадцатая ночь', author: 'Уильям Шекспир', img: img1, isFav: true },
        { title: 'Мертвое озеро', author: 'Н.А. Некрасов', img: img2, isFav: false },
        { title: 'Приключения Шерлока Холмса', author: 'Артур Конан Дойл', img: img3, isFav: true },
      ],
      x: 0,
      y: 0
    }
  },
  methods: {
      toggleFav(book) {
          book.isFav = !book.isFav
      },
      toggleShowBooks() {
          this.showBooks = !this.showBooks
      },
      handleEvent(e) {
          console.log(e, e.type)
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
}