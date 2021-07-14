Vue.component('featuredvideo',{
  template: `
  <div class=''>
    <h2 :class="post.articleData.section.title == ' ' || null || undefined ? 'hidden': ' '" class="text-zaobao-500 font-bold pt-6 px-4 mb-4 text-lg dark:text-white">{{post.articleData.section.title}}</h2>
    <div class="overflow-hidden bg-white shadow-md dark:bg-gray-700">
      <div class="dark:border-gray-600 relative">
        <!-- single image start -->
        <div class="aspect-w-8 aspect-h-5" v-if="post.articleData.images.length < 2">
          <itemtype :propsitemtype='post.itemType'></itemtype>
          <img class="object-cover" :src="post.articleData.images[0].rotator"/> 
          <!-- <img class="object-cover" v-lazy="getImageSrc(post.articleData.images)"/> -->
        </div>
        <!-- single image end-->
        <div class="p-4 dark:bg-gray-900">
          <p class="mb-2 text-xs text-gray-500">{{ post.articleData.section.name ? post.articleData.section.name : '预设段落标题' }}</p>
          <h3 class="h-10 mb-4 leading-tight clamp-2 dark:text-white">{{post.articleData.headline}}</h3>
          <div class="flex items-center justify-between">
            <span class="text-xs text-gray-500">{{ post.articleData.updatedTime | moment }}</span>
            <div class="flex items-center">
              <a href='#' v-if="!this.update" ><img class="inline-block w-3 mx-4" src="./assets/images/bookmark.png" :id="post.articleData.documentId" alt="" @click.prevent='addToLibrary' v-bookmark="post"/></a>
              <a href='#' v-else ><img  class="inline-block w-3 mx-4" src="./assets/images/bookmark_s.png" :id="post.articleData.documentId" alt="" @click.prevent='addToLibrary' v-bookmark="post"/></a>
              <a href='#' ><img class="w-3 mr-2 ml-4" src="./assets/images/share_ios.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='pt-2 text-center' :class="post.articleData.section.footer == ' ' || null || undefined ? 'hidden': ' '">
      <a class='flex justify-center items-center text-zaobao-500 dark:text-zaobao-950' href='#'>{{post.articleData.section.footer}}<span><img style='height: 1rem; width: auto; padding-left: 0.5556rem;' :src="darkMode ? './assets/icons/linkarrow.png' : './assets/icons/darklinkarrow.png'" /></span></a>
    </div>
  </div>`,
  name:'vertical-card',
  props: {
    post: {
    type: Object,
    default () {
      return {
        itemType: 'Video',
        articleData: {
             documentId: "st_756765",
             section: {
                code: "0",
                name: '预置段落标题',
                title: ' ', // sectiontitle will hid if this an empty string || null || undefined
                footer: '查看全部' // footer will hid if this an empty string || null || undefined
             },
             bookmarked: false,
             updatedTime: 1608010606,
             headline:"预置标题当没有数据时会出现",
             display:{
                type: "default",
                articleMedia:true
             },
             url: "https://www.straitstimes.com/business/property/new-private-home-sales-recover-in-november-climbing-19-from-october-ura-data",
             authors:[
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
             keywords:[
                
             ],
             teaser: "新加坡-私人房屋市场在11月恢复了上升势头，在新房推出量激增225％之后，销售量环比增长了近19％。",
             images:[
                {
                  rotator:"https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR",
                  url:"https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR",
                  large:"https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR",
                  thumbnail:"https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR",
                  credit:"照片：早报",
                  web_large:"https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR",
                  orientation:"landscape",
                  caption:"市建局数据：11月新私人房屋销售回升，较10月增长19％",
                  mob_large:"https://www.zaobao.com.sg/sites/default/files/styles/article_large_full/public/images/202009/20200930/file78ddw19r1k01mg8zw8k.jpg?itok=IPX5RGGR"
                },
                // {
                //    rotator:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/12/15/01_copy.jpg?itok=v_vz0m3g",
                //    url:"https://www.straitstimes.com/sites/default/files/styles/large/public/articles/2020/12/15/01_copy.jpg?itok=19fPv6o4",
                //    large:"https://www.straitstimes.com/sites/default/files/styles/xx_large/public/articles/2020/12/15/01_copy.jpg?itok=r-6QsZka",
                //    thumbnail:"https://www.straitstimes.com/sites/default/files/styles/thumbnail/public/articles/2020/12/15/01_copy.jpg?itok=eWJveG9W",
                //    credit:"照片：法新社",
                //    web_large:"https://www.straitstimes.com/sites/default/files/styles/3x18_medium/public/articles/2020/12/15/01_copy.jpg?itok=Q76BE-UK",
                //    orientation:"landscape",
                //    caption:"2020年12月14日，人们观看了智利南部普孔比利亚里卡湖两岸的日全食。",
                //    mob_large:"https://www.straitstimes.com/sites/default/files/styles/3x26_medium/public/articles/2020/12/15/01_copy.jpg?itok=de2eGK6P"
                // },
                // {
                //    rotator:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/12/15/02_copy.jpg?itok=3QwDQDst",
                //    url:"https://www.straitstimes.com/sites/default/files/styles/large/public/articles/2020/12/15/02_copy.jpg?itok=kUhre3Rp",
                //    large:"https://www.straitstimes.com/sites/default/files/styles/xx_large/public/articles/2020/12/15/02_copy.jpg?itok=cAi6FJwz",
                //    thumbnail:"https://www.straitstimes.com/sites/default/files/styles/thumbnail/public/articles/2020/12/15/02_copy.jpg?itok=cnK7v6DP",
                //    credit:"照片：EPA-EFE",
                //    web_large:"https://www.straitstimes.com/sites/default/files/styles/3x18_medium/public/articles/2020/12/15/02_copy.jpg?itok=vxPx6F-2",
                //    orientation:"landscape",
                //    caption:"2020年12月14日，来自马普切原住民的Mateo Nahuelpan社区的一名女孩准备在智利Araucania地区Monkul观看带特殊眼镜的日食。",
                //    mob_large:"https://www.straitstimes.com/sites/default/files/styles/3x26_medium/public/articles/2020/12/15/02_copy.jpg?itok=o6GH3ZZJ"
                // },
                // {
                //    rotator:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/12/15/03_copy.jpg?itok=3S76Hf3I",
                //    url:"https://www.straitstimes.com/sites/default/files/styles/large/public/articles/2020/12/15/03_copy.jpg?itok=Z009Edqn",
                //    large:"https://www.straitstimes.com/sites/default/files/styles/xx_large/public/articles/2020/12/15/03_copy.jpg?itok=qusoqYU7",
                //    thumbnail:"https://www.straitstimes.com/sites/default/files/styles/thumbnail/public/articles/2020/12/15/03_copy.jpg?itok=lXjC5TE3",
                //    credit:"照片：法新社",
                //    web_large:"https://www.straitstimes.com/sites/default/files/styles/3x18_medium/public/articles/2020/12/15/03_copy.jpg?itok=i6MyZuWr",
                //    orientation:"landscape",
                //    caption:"2020年12月14日从阿根廷内乌肯省的彼德拉·德拉阿奎拉看到的日全食。",
                //    mob_large:"https://www.straitstimes.com/sites/default/files/styles/3x26_medium/public/articles/2020/12/15/03_copy.jpg?itok=h8RlZEsP"
                // },
                // {
                //    rotator:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/12/15/04_copy.jpg?itok=N-XHe_T8",
                //    url:"https://www.straitstimes.com/sites/default/files/styles/large/public/articles/2020/12/15/04_copy.jpg?itok=snFOs1Bw",
                //    large:"https://www.straitstimes.com/sites/default/files/styles/xx_large/public/articles/2020/12/15/04_copy.jpg?itok=Lnks-J1S",
                //    thumbnail:"https://www.straitstimes.com/sites/default/files/styles/thumbnail/public/articles/2020/12/15/04_copy.jpg?itok=uH9i5qDF",
                //    credit:"照片：路透社",
                //    web_large:"https://www.straitstimes.com/sites/default/files/styles/3x18_medium/public/articles/2020/12/15/04_copy.jpg?itok=3piLV6kb",
                //    orientation:"landscape",
                //    caption:"2020年12月14日，一名男子在智利瓦尔帕莱索观看戴着电焊帽的日食。",
                //    mob_large:"https://www.straitstimes.com/sites/default/files/styles/3x26_medium/public/articles/2020/12/15/04_copy.jpg?itok=pTN5kOTt"
                // }
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
      darkMode: false
    }
  },
  mounted () {
    this.detectDarkMode()
  },
  methods: {
    addToLibrary () {
      this.post.articleData.bookmarked = !this.post.articleData.bookmarked
    },
    detectDarkMode () {
      if (html.classList.contains('dark')) {
        this.darkMode =  true
      }
    }
  }
})

// full width feature card