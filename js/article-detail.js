console.log('article detail')
// dark more function from app.js
updateDarkMode(isDarkMode())

//lazy loading 
Vue.use(VueLazyload, {
  lazyComponent: true,
  loading: "./assets/images/placeholder_img.png",
  observer: true
})

// start vue
let app =  new Vue({
  el: '#article-detail',
  data () {
    return {
      isDark: false,
      cards: {},
      loading: true,
      getArticleArray: [],
      library: [],
      propsitemtype: 'Gallery'
    }
  },
  components : {
  },
  watch: {
    cards (newVal, oldVal) {
      app.loading = false
    }
  },
  mounted () {
    // this.toggleDarkmode()
    this.getLisitng() 
  },
  methods : {
    toggleDarkmode () {
      this.isDark =! this.isDark;
      const html = document.getElementById('html');
      html.classList.toggle('dark');
    },
    getLisitng () {
      //to test data fetch
      axios.get('./assets/data/article_detail.json')
        .then(({data}) => {
          this.cards = data.data
          // console.log(data, 'cardsxxxx')
          console.log(data.data, 'cards')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
