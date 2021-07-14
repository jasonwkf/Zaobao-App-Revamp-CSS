updateDarkMode(isDarkMode())
Vue.use(VueLazyload, {
  lazyComponent: true,
  loading: "./assets/images/placeholder_img.png",
  observer: true
})

Vue.use(VueAwesomeSwiper)

let app = new Vue({
  el: '#listing',
  components: {
  },
  data () {
    return {
      isDark: false,
      cards: [],
      loading: true,
      getArticleArray: [],
      library: []
    }
  },
  watch: {
    cards (newVal, oldVal) {
      app.loading = false
    }
  },
  created () {
    this.getLisitng()
  },
  mounted () {
    // this.toggleDarkmode()
  },
  beforeDestroy () {
  },
  methods : {
    toggleDarkmode () {
      this.isDark =! this.isDark;
      const html = document.getElementById('html');
      html.classList.toggle('dark');
    },
    getLisitng () {
      //to test data fetch
      axios.get('./assets/data/listing-new.json')
        .then(({ data }) => {
          this.cards = data.data
          // this.getArryNum(this.cards)
          console.log(this.cards, 'cards')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getArryNum (cards) {
      console.log(cards, 'cards getarry')
      let arry = []
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].cardType === 'Advertisement') {
          console.log(i, 'id')
          if (cards[i - 1].cardType === 'Standard') {
            arry.push(i-1)
            this.getArticleArray =  arry
            console.log(this.getArticleArray, 'article array')
          }
        }
      }
    }
  }
})
