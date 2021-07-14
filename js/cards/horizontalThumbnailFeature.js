Vue.component('horizontalthumbnailfeature',{
  template: `
    <div class="bg-white dark:bg-gray-900 section-border-bottom">
      <div class="py-6 dark:bg-gray-900">
        <h2 class="px-4 mb-4 text-lg font-medium text-zaobao-500 dark:text-zaobao-950">推荐专栏</h2>
        <div class="flex pb-4 pl-4 space-x-3 overflow-x-auto">
          <horizontalthumbnailbasefeature v-for='(post, index) in items' :key='index' :post="post"></horizontalthumbnailbasefeature>
          <div class="block w-4 h-4 text-gray-100 dark:text-gray-900">.</div>
        </div>
        <div class='px-4 text-center text-zaobao-500 dark:text-zaobao-950'>
          <a class='flex justify-center items-center' href='#'>查看更多精彩内容<span><img style='height: 1rem; width: auto; padding-left: 0.5556rem;' :src="darkMode ? './assets/icons/darklinkarrow.png' : './assets/icons/linkarrow.png'"/></span></a>
        </div>
      </div>
    </div>`,
  props: {
    items: {
      type: Array,
      default () {
        return [
          {
            itemType: 'Podcast',
            articleData:{
                documentId:"st_756763",
                cardFooter: {
                  title: "查看更多精彩内容",
                  link: "xxxx"
                },
                section:{
                  code:"29"
                },
                bookmarked: false,
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
              keywords:[
                  
                ],
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
            itemType: 'Gallery',
            articleData: {
              documentId:"st_756755",
              section:{
                code:"2"
              },
              bookmarked: false,
              updatedTime:1608007371,
              headline:"WeWork，软银未能就股票交易被驳回提起诉讼",
              display:{
                  type:"default",
                  articleMedia:true
                },
              url:"https://www.straitstimes.com/business/companies-markets/wework-softbank-fail-to-get-suit-over-stock-deal-dismissed",
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
              teaser:"威尔明顿（布隆伯格）-WeWork和软银集团未能说服美国法官就取消的30亿美元（40亿新元）的股票购买案提出一些初创公司董事提起的诉讼。",
              images:[
                {
                  rotator:"https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2020/12/15/af_wework-softbank_151220.jpg?itok=TvK1UDwK",
                  url:"https://www.straitstimes.com/sites/default/files/styles/large/public/articles/2020/12/15/af_wework-softbank_151220.jpg?itok=CDwIra_V",
                  large:"https://www.straitstimes.com/sites/default/files/styles/xx_large/public/articles/2020/12/15/af_wework-softbank_151220.jpg?itok=UdbkYaPj",
                  thumbnail:"https://www.straitstimes.com/sites/default/files/styles/thumbnail/public/articles/2020/12/15/af_wework-softbank_151220.jpg?itok=g2zLjpob",
                  credit:"照片：路透社",
                  web_large:"https://www.straitstimes.com/sites/default/files/styles/3x18_medium/public/articles/2020/12/15/af_wework-softbank_151220.jpg?itok=yVkBvf11",
                  orientation:"landscape",
                  caption:"该裁决解决了两套WeWork主管之间的冲突，他们采取了不同的方式与SoftBank打交道。",
                  mob_large:"https://www.straitstimes.com/sites/default/files/styles/3x26_medium/public/articles/2020/12/15/af_wework-softbank_151220.jpg?itok=3MXfMRbZ"
                }
              ],
              videos:[],
              paid: false
            }
          },
          {
            itemType:"Video",
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
            }
          }
        ]
      }
    }
  },
  data() {
    return {
      darkMode: false
    }
  },
  mounted () {
    this.detectDarkMode()
  },
  methods: {
    detectDarkMode () {
      if (html.classList.contains('dark')) {
        this.darkMode =  true
      }
    }
  },
  computed: {

  }
})