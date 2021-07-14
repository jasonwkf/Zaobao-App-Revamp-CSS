Vue.component('carouselvue', {
  template: `
  <div class='p-4 bg-white dark:bg-gray-800'>
    <h2 class="text-zaobao-500 font-medium mb-4 text-lg dark:text-white">精选新闻</h2>
    <carousel :perPage=1 paginationActiveColor="#a50034" paginationColor="#ffffff" :paginationPadding=${6}>
      <slide v-for="(post, index) in items" :key="index">
        <div :id="'card ' + index" class='slide w-full'>
          <div class="aspect-w-8 aspect-h-5 overflow-hidden rounded-lg">
          <!-- <img class="object-cover overflow-hidden" v-lazy="getImageSrc(post.articleData.images)"/> -->
            <img class="object-cover" :src="post.articleData.images.length ? post.articleData.images[0].rotator : 'https://picsum.photos/id/43/800/500'"/>
          </div>
          <div class="py-4" style="height: 138px;">
            <p class="text-sm text-gray-600 dark:text-gray-500">{{ post.articleData.section.name ? post.articleData.section.name : '预设段落标题' }}</p>
            <h3 class="mb-4 text-xl leading-tight clamp-2 dark:text-white">{{post.articleData.headline}}</h3>
            <div class="flex items-center justify-between">
              <span class="text-xs text-gray-500">{{ post.articleData.updatedTime | moment }}</span>
              <div class="space-x-2 flex items-center">
                <a href='#' v-if="!this.update" ><img class="inline-block w-3 mx-4" src="./assets/images/bookmark.png" :id="post.articleData.documentId" alt="" @click.prevent='addToLibrary' v-bookmark="post"/></a>
                <a href='#' v-else ><img  class="inline-block w-3 mx-4" src="./assets/images/bookmark_s.png" :id="post.articleData.documentId" alt="" @click.prevent='addToLibrary' v-bookmark="post"/></a>
                <a href='#' ><img class="w-3 ml-2" src="./assets/images/share_ios.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div> `,
  components : {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
  methods : {
    addToLibrary (post) {
      console.log(post, 'ssss')
      post.articleData.bookmarked = !post.articleData.bookmarked
    }
  },
  data () {
    return {}
  },
  props: {
    items: {
      type: Array,
      default () {
        return [
          {
            articleData:{
                documentId:"st_756763",
                section:{
                  code:"29"
                },
                bookmarked:false,
                updatedTime: 1609212345,
                headline:"台湾在发射新军舰时被视为西方的武器供应商",
                display:{
                  type:"default",
                  articleMedia:true
                },
                url:"https://www.straitstimes.com/asia/east-asia/taiwan-sees-role-as-arms-supplier-for-west-as-it-launches-new-warship",
                authors:[
                  {
                    publication:"Lianhe Zaobao",
                    from:null,
                    id: "522210",
                    twitter_handler:null,
                    linkedInHandle:null,
                    email:"ashaffiq@sph.com.sg",
                    designation:"法院通讯员",
                    photo:"https://www.straitstimes.com/sites/default/files/styles/byline_profile/public/author/2020/12/07/shaffiq_alkhatib.png?itok=ZMvyG-y3",
                    name:"沙菲克·阿尔卡提卜",
                    description:"Author {id = 522210;email = ashaffiq@sph.com.sg;name = 沙菲克·阿尔卡提卜;twitterHandle = (null);linkedInHandle = (null);photo = https://www.straitstimes.com/sites/default/files/styles/byline_profile/public/author/2020/12/07/shaffiq_alkhatib.png?itok=ZMvyG-y3;designation = 法院通讯员;authorDesc = (null);publication = Lianhe Zaobao;from = (null);}"
                  }
                ],
                publicationTime: 1608014096,
              keywords:[],
              teaser:"面对来自北京的日益严峻的军事挑战，蔡女士将增强台湾的防御能力作为优先事项。",
              images:[
                {
                    rotator:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=V9Ec7m3H",
                    url:"https://www.straitstimes.com/sites/default/files/styles/large/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=xb_Q0336",
                    large:"https://www.straitstimes.com/sites/default/files/styles/xx_large/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=ne9nZTaB",
                    thumbnail:"https://www.straitstimes.com/sites/default/files/styles/thumbnail/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=eSGUAJkh",
                    credit:"照片：路透社",
                    web_large:"https://www.straitstimes.com/sites/default/files/styles/3x18_medium/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=y8su3NkO",
                    orientation:"landscape",
                    caption:"台湾海军将这种新型Chiang蒋级护卫舰称为“航母杀手”，原因是它补充了反舰导弹。",
                    mob_large:"https://www.straitstimes.com/sites/default/files/styles/3x26_medium/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=pePKSVtX"
                }
              ],
              videos:[
                
              ],
              paid:false
            }
          },
          {
            articleData: {
              documentId:"st_756762",
              section:{
                code:"14"
              },
              bookmarked: false,
              updatedTime:1609011487,
              headline:"青少年男孩承认在公共汽车上录制女人的掀裙视频",
              display:{
                  type:"default",
                  articleMedia:true
                },
              url:"https://www.straitstimes.com/singapore/courts-crime/teen-boy-admits-to-recording-upskirt-video-of-woman-in-bus",
              authors:[
                {
                  publication:"Lianhe Zaobao",
                  from:null,
                  id:"522210",
                  twitter_handler: null,
                  linkedInHandle: null,
                  email:"ashaffiq@sph.com.sg",
                  designation:"法院通讯员",
                  photo:"https://www.straitstimes.com/sites/default/files/styles/byline_profile/public/author/2020/12/07/shaffiq_alkhatib.png?itok=ZMvyG-y3",
                  name:"沙菲克·阿尔卡提卜",
                  description:"Author {id = 522210;email = ashaffiq@sph.com.sg;name = 沙菲克·阿尔卡提卜;twitterHandle = (null);linkedInHandle = (null);photo = https://www.straitstimes.com/sites/default/files/styles/byline_profile/public/author/2020/12/07/shaffiq_alkhatib.png?itok=ZMvyG-y3;designation = 法院通讯员;authorDesc = (null);publication = Lianhe Zaobao;from = (null);}"
                }
              ],
              publicationTime:1608009802,
              keywords:[],
              teaser:"这位19岁的年轻人因偷窥罪而认罪。",
              images:[
                {
                  rotator:"https://static.zaobao.com/s3fs-public/styles/article_large_full/public/images/202012/20201204/91800000u.jpg?zcktbdeMwdt9gFdZPDzmfjNQQYZF8IFb&itok=pXnNAOz9",
                  url:"https://www.straitstimes.com/sites/default/files/styles/large/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=xb_Q0336",
                  large:"https://www.straitstimes.com/sites/default/files/styles/xx_large/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=ne9nZTaB",
                  thumbnail:"https://www.straitstimes.com/sites/default/files/styles/thumbnail/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=eSGUAJkh",
                  credit:"照片：路透社",
                  web_large:"https://www.straitstimes.com/sites/default/files/styles/3x18_medium/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=y8su3NkO",
                  orientation:"landscape",
                  caption:"台湾海军将这种新型Chiang蒋级护卫舰称为“航母杀手”，原因是它补充了反舰导弹。",
                  mob_large:"https://www.straitstimes.com/sites/default/files/styles/3x26_medium/public/articles/2020/12/15/rk_tuochiang-class_corvettes_151220.jpg?itok=pePKSVtX"
                }
              ],
              videos:[],
              paid: false
            },
            itemType:"Article"
          },
          {
            articleData: {
              documentId:"st_756762",
              section:{
                code:"14"
              },
              bookmarked:false,
              updatedTime:1608009141,
              headline:"中学1发布结果将于12月22日上午9点发布",
              display:{
                  type:"default",
                  articleMedia:true
                },
              url: "https://www.straitstimes.com/singapore/secondary-1-posting-results-to-be-released-at-9am-on-dec-22",
              authors:[
                {
                  publication:"Lianhe Zaobao",
                  from:null,
                  id:"522210",
                  twitter_handler: null,
                  linkedInHandle: null,
                  email:"ashaffiq@sph.com.sg",
                  designation:"法院通讯员",
                  photo:"https://www.straitstimes.com/sites/default/files/styles/byline_profile/public/author/2020/12/07/ng_wei_kai.png?itok=dfY-t2f7",
                  name:"沙菲克·阿尔卡提卜",
                  description:"Author {id = 522210;email = ashaffiq@sph.com.sg;name = 沙菲克·阿尔卡提卜;twitterHandle = (null);linkedInHandle = (null);photo = https://www.straitstimes.com/sites/default/files/styles/byline_profile/public/author/2020/12/07/shaffiq_alkhatib.png?itok=ZMvyG-y3;designation = 法院通讯员;authorDesc = (null);publication = Lianhe Zaobao;from = (null);}"
                }
              ],
              publicationTime:1608005700,
              keywords:[],
              teaser:"收到成绩后的第二天，学生无需亲自到新学校报到。",
              images:[
                {
                  rotator: "https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/12/15/fhsecondary151220.jpg?itok=AlEpW8WX",
                  url: "https://www.straitstimes.com/sites/default/files/styles/large/public/articles/2020/12/15/fhsecondary151220.jpg?itok=4HOrundl",
                  large: "https://www.straitstimes.com/sites/default/files/styles/xx_large/public/articles/2020/12/15/fhsecondary151220.jpg?itok=uNaCYqHf",
                  thumbnail: "https://www.straitstimes.com/sites/default/files/styles/thumbnail/public/articles/2020/12/15/fhsecondary151220.jpg?itok=035qsYoK",
                  credit: "ST照片：MARK CHEONG",
                  web_large: "https://www.straitstimes.com/sites/default/files/styles/3x18_medium/public/articles/2020/12/15/fhsecondary151220.jpg?itok=oHOTSHnE",
                  orientation: "landscape",
                  caption: "由于Covid-19的情况，学生无需在收到成绩后的第二天亲自到新学校举报。",
                  mob_large: "https://www.straitstimes.com/sites/default/files/styles/3x26_medium/public/articles/2020/12/15/fhsecondary151220.jpg?itok=fOWjrBjf"
                }
              ],
              videos:[],
              paid: false
            },
            itemType:"Article"
          }
        ]
      }
    }
  }
})