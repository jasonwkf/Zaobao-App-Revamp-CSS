Vue.component('featuredstack',{
  template: `
  <div class="bg-gray-100 dark:bg-gray-800">
    <div class="px-4 py-6">
      <h2 class="text-zaobao-500 font-medium mb-4 text-lg dark:text-zaobao-950">热门推荐</h2>
      <div class="card-radius-all overflow-hidden bg-white shadow-md dark:bg-gray-900">
        <section v-for="(item, index) in items" :key='index'>
          <featured v-if="index == 0" :post='item'></featured>
          <standard v-else :post='item' :css="'border-gray-600'" :lastCard="items.length == index + 1 ? true : false"></standard>
        </section>
        <!-- card footer -->
        <div class='py-4 mx-4 text-center border-t border-gray-200 text-zaobao-500 dark:text-zaobao-950 dark:border-gray-600'>
          <a class='flex justify-center items-center' href='#'>查看更多精彩内容<span><img style='height: 1rem; width: auto; padding-left: 0.5556rem;' :src="darkMode ? './assets/icons/darklinkarrow.png' : './assets/icons/linkarrow.png'"/></span></a>
        </div>
      </div>
    </div>
  </div>`,
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
              bookmarked:false,
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
              images:[],
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
                  medium: "https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/12/15/fhsecondary151220.jpg?itok=AlEpW8WX",
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
  },
  mounted () {
    this.detectDarkMode()
  },
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    detectDarkMode () {
      if (html.classList.contains('dark')) {
        this.darkMode =  true
      }
    }
  }
})