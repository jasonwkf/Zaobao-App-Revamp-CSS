Vue.component('standard', {
  template:`
  <article ref='test' class="grid grid-cols-5 mx-4 py-3 gap-x-3" :class="lastCard ? ' ': 'border-b border-gray-200 dark:' + css" v-if="post.articleData.images.length > 0">
    <div class="col-span-3">
      <h6 class="mb-2 text-xs text-gray-500 dark:text-gray-300">{{ post.articleData.section.name ? post.articleData.section.name : '预设段落标题' }} </h6>
      <h4 class="mb-2 clamp-2 font-regular leading-tight text-gray-800 dark:text-white">{{ post.articleData.headline }}</h4>
    </div>
    <div class="col-span-2">
      <div class="overflow-hidden bg-gray-200 card-radius-all aspect-w-3 aspect-h-2 mb-4 relative">
        <itemtype :propsitemtype='post.itemType'></itemtype>
        <img class="object-cover card-radius-all" v-lazy="getImageSrc(post.articleData)"/>
      </div>
    </div>
    <div class="flex items-center justify-between col-span-5">
      <div class='flex flex-row items-center'>
        <!-- <a class='text-xs bg-cta py-1 px-2 text-white rounded-2xl mr-4' href="#">订户</a> -->
        <a class='text-xs bg-cta py-1 px-2 text-white rounded-2xl mr-4' href="#" v-if='post.articleData.paid && showPaidBoolean'>订户</a>
        <p class="card-time-indicator text-gray-500">{{ post.articleData.publicationTime | moment }}&nbsp;{{ post.articleData.publicationTime | minutes}}</p>
      </div>
      <div class="flex items-center">
        <img v-if="!this.update" class="inline-block w-3 mx-4" src="./assets/images/bookmark.png" :id="post.articleData.documentId" alt="" @click.prevent='addToLibrary' v-bookmark="post"/>
        <img v-else class="inline-block w-3 mx-4" src="./assets/images/bookmark_s.png" :id="post.articleData.documentId" alt="" @click.prevent='addToLibrary' v-bookmark="post"/>
        <img class="w-3 ml-4 mr-2" src="./assets/images/share_ios.png" alt="" />
      </div>
    </div>
  </article>
  <article ref='test' class="mx-4 py-3" :class="lastCard ? ' ': 'border-b border-gray-200 dark:' + css" v-else>
    <h6 class="mb-2 text-xs text-gray-500 dark:text-gray-300">{{ post.articleData.section.name ? post.articleData.section.name : '预设段落标题' }}</h6>
    <h4 class="mb-4 clamp-2 font-regular leading-tight text-gray-800 dark:text-white">{{ post.articleData.headline }}</h4>
    <div class="flex justify-between items-center">
      <div class='flex flex-row items-center'>
        <!-- <a class='text-xs bg-cta py-1 px-2 text-white rounded-2xl mr-4' href="#">订户</a> -->
        <p class="card-time-indicator text-gray-500">{{ post.articleData.publicationTime | moment }}&nbsp;{{ post.articleData.publicationTime | minutes}}</p>
      </div>
      <div class="flex items-center">
        <img v-if="!this.update"  class="inline-block w-3 mx-4" src="./assets/images/bookmark.png" :id="post.articleData.documentId" alt="" @click.prevent='addToLibrary' v-bookmark="post"/>
        <img v-else class="inline-block w-3 mx-4" src="./assets/images/bookmark_s.png" :id="post.articleData.documentId" alt="" @click.prevent='addToLibrary' v-bookmark="post"/>
        <img class="w-3 ml-4 mr-2" src="./assets/images/share_ios.png" alt="" />
      </div>
    </div>
  </article>`,
  props: {
    post: {
      type: Object,
      default() {
        return {
          itemType: 'Article',
          articleData: {
            documentId:"st_756763",
            section:{
              code:"29"
            },
            bookmarked:false,
            updatedTime: 1617079913,
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
            publicationTime: 1617079913,
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
          videos:[],
          paid: true
          }
        }
      }
    },
    lastCard: {
      type: Boolean,
      default: false
    },
    css: {
      type: String,
      default: 'border-gray-800',
      require: true
    },
    showPaidBoolean: {
      type: Boolean,
      default: false
    },
    getSectionArry: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      bookmarked: [],
      update: false
    }
  },
  mounted () {
    this.removeBorder()
  },
  methods: {
    addToLibrary () {
      this.update = !this.update
    },
    removeBorder () {
      // to remove bottom border when the next section is advertisement
      if (this.getSectionArry.length) {
        for (var i = 0; i < this.getSectionArry.length; i++ ) {
          if (this.$refs.test.id == `standard ${this.getSectionArry[i]}`) {
            this.$refs.test.classList.remove('border-b')
          }
        }
      }
    }
  }
})