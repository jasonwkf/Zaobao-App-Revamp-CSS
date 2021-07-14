Vue.component('horizontalthumbnailbase', {
  template: `
  <div class="flex-shrink-0 rotator-base-card-width overflow-hidden bg-white card-radius-all shadow-sm dark:bg-gray-900">
    <div class="aspect-w-8 aspect-h-5 relative" v-if="post.articleData.images.length">
      <itemtype :propsitemtype='post.itemType'></itemtype>
      <!-- <img class="object-cover" v-lazy="getImageSrc(post.articleData.images)"/> -->
      <img class="object-cover card-radius-top" :src="post.articleData.images[0].rotator"/>
    </div>
    <div class="px-3 pt-4 pb-3 dark:bg-gray-900">
      <p class="text-xs pb-1 text-gray-600 dark:text-gray-500">{{ post.articleData.section.name ? post.articleData.section.name : '预设段落标题' }}</p>
      <h3 class="h-12 mb-4 leading-6 clamp-2 dark:text-white text-gray-800">{{post.articleData.headline}}</h3>
      <div class="flex items-center justify-between">
        <span class="card-time-indicator text-gray-500">{{ post.articleData.updatedTime | moment }}</span>
        <div class="flex items-center">
          <a href='#' v-if="!this.update" ><img class="inline-block w-3 mx-4" src="./assets/images/bookmark.png" :id="post.articleData.documentId" alt="" @click.prevent='addToLibrary' v-bookmark="post"/></a>
          <a href='#' v-else ><img  class="inline-block w-3 mx-4" src="./assets/images/bookmark_s.png" :id="post.articleData.documentId" alt="" @click.prevent='addToLibrary' v-bookmark="post"/></a>
          <a href='#' ><img class="w-3 ml-4" src="./assets/images/share_ios.png" alt="" /></a>
        </div>
      </div>
    </div>
  </div>`,
  props: {
    post: {
      type: Object,
      default () {
        return {
              itemType: 'Podcast',
              articleData: {
              documentId: "st_756765",
              section:{
                  code: "0",
                  name: '预置段落标题'
              },
              bookmarked: false,
              updatedTime: 1608010606,
              headline:"预置标题当没有数据时会出现",
              display:{
                  type: "default",
                  articleMedia:true
              },
              url: "https://www.straitstimes.com/business/property/new-private-home-sales-recover-in-november-climbing-19-from-october-ura-data",
              authors: [
                  {
                     publication :"Lianhe Zaobao",
                     from: null,
                     id: "33307",
                     twitter_handler: null,
                     linkedInHandle: null,
                     email: "gleong@sph.com.sg",
                     designation: "业务通讯员",
                     photo: "https://www.straitstimes.com/sites/default/files/styles/byline_profile/public/author/2020/12/07/grace_leong.png?itok=Oh3gb0aF",
                     name: "梁咏仪",
                     description: "Author {id = 33307;email = gleong@sph.com.sg;name = 梁咏仪;twitterHandle = (null);linkedInHandle = (null);photo = https://www.straitstimes.com/sites/default/files/styles/byline_profile/public/author/2020/12/07/grace_leong.png?itok=Oh3gb0aF;designation = 业务通讯员;authorDesc = 她于2013年加入该论文。2012年，在《商业时报》期间，她获得了新加坡证券投资者协会的年度金融故事奖。她于1999年至2010年在美国工作，获得了无数奖项，包括2005年圣丹斯电影节上因杰出的本地新闻而获得的普利策报纸卓越奖，以及美联社的奖项，其中包括2009年因抵押贷款欺诈现象而增加的一项奖项。在犹他州的《每日先驱报》上，主要危机加剧了。从1994年至1997年，她为香港和新加坡的道琼斯通讯社报道了股票市场和商品。;publication = Lianhe Zaobao;from = (null);}"
                  }
              ],
              publicationTime:1608010607,
              keywords:[],
              teaser: "新加坡-私人房屋市场在11月恢复了上升势头，在新房推出量激增225％之后，销售量环比增长了近19％。",
              images:[
                  {
                    rotator: "https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR",
                    url: "https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR",
                    large: "https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR",
                    thumbnail: "https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR",
                    credit: "照片：早报",
                    web_large: "https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR",
                    orientation: "landscape",
                    caption: "市建局数据：11月新私人房屋销售回升，较10月增长19％",
                    mob_large: "https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR"
                  }
              ],
              videos:[
                  
              ],
              paid: false
            }
        }
      }
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    addToLibrary () {
      this.post.articleData.bookmarked = !this.post.articleData.bookmarked
    }
  }
})