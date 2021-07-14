updateDarkMode(isDarkMode())

Vue.use(VueLazyload, {
  lazyComponent: true,
  loading: "./assets/images/placeholder_img.png",
  observer: true
})

let app = new Vue({
  el: '#multimedia',
  components : {
  },
  data () {
    return {
      isAndroid: /Android/.test(window.navigator.userAgent),
      isIOS: [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in window.document,
      os: ' ',
      isDark: false,
      loading: true,
      feature: [
        {
          "sectionTitle": "早报播客",
          "items" : [
            {
              "title": "老总Group Chat",
              "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-05/Editors_Groupchat_Podcast_rotator_new_5.png?uBdxS4XvIeDtpuBVECIIqYe2T0.wFksS&itok=XDwS2Nlh",
              "link": "https://www.zaobao.com.sg/podcast/editors-group-chat",
              "tag_name" : '老总Group Chat',
              "tag_id" : '10047'
            }
          ]
        },
        {
          "sectionTitle": "互动新闻",
          "items" : [
            {
              "title": "2021年财政预算收支分配",
              "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202102/20210217/nr-budgetbreakdown.png?v1pRWAEQeYLcOmsKsSuz6vbYy3zqKPHo&itok=mc8tOb3H",
              "link": "https://www.zaobao.com.sg/interactive-graphics",
              "tag_name" : '互动新闻',
              "tag_id" : ''
            }
          ]
        }
      ],
      items: [
              {
                "sectionTitle": "系列节目",
                "items": [
                  {
                    "title": "早报骑行私房路线",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-05/cycle-with-zaobao-north-route-article-cover_0.png?Rd0ZAJMPF6dERAl11ck0binncZVqOLIx&itok=HeRkMWMx",
                    "link": "https://www.zaobao.com.sg/video-series/cycle-with-zaobao",
                    "tag_name": '早报骑行私房路线',
                    "tag_id": '111859'
                  },
                  {
                    "title": "走进书房",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-05/NR-Image_EP3-01.jpg?9EUQ_bKZN0EoUu5mPwQsxikgZRqb_mKD&itok=5-LFkfPB",
                    "link": "https://www.zaobao.com.sg/video-series/on-their-bookshelves",
                    "tag_name": '走进书房',
                    "tag_id":'116037'
                  },
                  {
                    "title": "新画彩",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-04/sing-artistrt-printmaking-zhang-fu-ming-lim-jiaqi-nr-ep-4%20%281%29.png?CVvORpBP2Q8QXQL82EpBsOQuhZHfAULK&itok=O3FE0Zb9",
                    "link": "https://www.zaobao.com.sg/video-series/sing-artistry",
                    "tag_name": '新画彩',
                    "tag_id": '109511'
                  },
                  {
                    "title": "早城市",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-04/7b16e6a5-a6e6-4d01-a653-1437fb9f5527.png?0U3rFwRMwQBY.7vDEGzWWekH1Az9SWAw&itok=AvMq9_xg",
                    "link": "https://www.zaobao.com.sg/video-series/from-our-correspondents",
                    "tag_name": '早城市',
                    "tag_id": '103284'
                  },
                  {
                    "title": "将，是老的辣",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-04/Article%20Image%20Rotator_EP4.jpg?ngw5IQG_XPSeVszTZfCRAbsSJDhyJVPQ&itok=968HA_SS",
                    "link": "https://www.zaobao.com.sg/keywords/jiang-shi-lao-de-la",
                    "tag_name" : '将是老的辣',
                    "tag_id" : '109503'
                  },
                  {
                    "title": "老店",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202103/20210317/hawaii-cabaret-and-nite-club-phua-koon-pho-cover.png?rQJaB_Vcpip48IyBTwzIfaVesFIBhs8P&itok=6drk-qxB",
                    "link": "https://www.zaobao.com.sg/video-series/lao-diam",
                    "tag_name" : '老店',
                    "tag_id" : '17753'
                  },
                  {
                    "title": "Ah Boy 封神榜",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202012/20201230/nr_article_image_ep5.jpg?ouKxxrIufP7VGt5NvlKB7iuW4OBXxLlU&itok=p3KdfPn8",
                    "link": "https://www.zaobao.com.sg/video-series/ah-boy-dont-play-pray",
                    "tag_name" : 'Ah Boy 封神榜',
                    "tag_id" : '2211'
                  },
                  {
                    "title": "拇指兵团",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-04/ep07_mz04-01.jpg?fp2K2sVXQdkUmtAtEE6nJfre6SW5USeN&itok=8E0PTvCh",
                    "link": "https://www.zaobao.com.sg/video-series/platoon-thumbs-up",
                    "tag_name" : '拇指兵团',
                    "tag_link" : '100769'
                  },
                  {
                    "title": "新手来挑战",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202103/20210307/ep04_xs04-01.jpg?rH_dMqw16uU1KHJk.Mh2_LawTLFOcsUG&itok=Ab3-7Mzg",
                    "link": "https://www.zaobao.com.sg/video-series/toughest-trainee",
                    "tag_name" : '新手来挑战',
                    "tag_link" : '100603'
                  },
                  {
                    "title": "有课到",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202010/20201008/20201009-attendtion-on-smartphone-ang-yiling-article-cover.png?xBTrGVxoDuvfMUxfQMRPrEYafeTAWgLk&itok=Diy5DK_e",
                    "link": "https://www.zaobao.com.sg/video-series/attendtion",
                    "tag_name" : '有课到',
                    "tag_link" : '2217'
                  },
                  {
                    "title": "“疫”起过生活",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202007/20200715/20200717-come-n-learn-digital-kendra-ong-article-cover.png?zD2gkEb7pQYN_pYt610lg5aNsM5jpoJ3&itok=sP7OUlC5",
                    "link": "https://www.zaobao.com.sg/video-series/come-n-live",
                    "tag_name" : '疫起过生活',
                    "tag_link" : '2232'
                  },
                  {
                    "title": "Yeah！生活Live House",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202005/20200515/ep10-nr.png?0ZrD6WMy5oPuPXOvUOixCstYcKBgLLgD&itok=Qi0xi1-j",
                    "link": "https://www.zaobao.com.sg/video-series/yeah-live-music",
                    "tag_name" : 'Yeah！生活Live House',
                    "tag_id" : '41638'
                  },
                  {
                    "title": "味！吃什么？",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202009/20200926/20200926_lifestyle_flavourite.jpg?PDdO.xXkzYKLV.kDK9aFK8nS_1LGJmGN&itok=lMr4hGob",
                    "link": "https://www.zaobao.com.sg/video-series/whats-your-flavourite",
                    "tag_name" : '味！吃什么？',
                    "tag_id" : '23321'
                  },
                  {
                    "title": "创新声",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/201904/20190403/20190403_entertainment_sos.jpg?h9VW9Q65lE4WfLSvPQLxI2.ca2ZOUnBP&itok=zR6ufzXH",
                    "link": "https://www.zaobao.com.sg/video-series/sing-our-song",
                    "tag_name" : '创新声',
                    "tag-id" : '35072'
                  },
                  {
                    "title": "大使“新”任务",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/201902/20190213/20190213_mission_ep7.jpg?yUjMnmP81oh36SVJ7z1YoYF4EG_6ARos&itok=HhtK9IZu",
                    "link": "https://www.zaobao.com.sg/video-series/mission-sg",
                    "tag_name" : '大使“新”任务',
                    "tag_id": '48831'
                  },
                  {
                    "title": "小小新游记",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/201901/20190118/ep13_800x500.jpg?BDkHO8p2fs04Jf_v2nfEMsFO6W9Hg.SM&itok=meCA5_Nk",
                    "link": "https://www.zaobao.com.sg/video-series/junior-sg-adventures",
                    "tag_name" : '小小新游记',
                    "tag_id" : '96408'
                  }
                ]
              },
              {
                "sectionTitle": "早报播客",
                "items": [
                  {
                    "title": "理财万事通",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-05/financial-podcast-no96-babyinsurance.png?_yFfe3p49DD2ZZ4MRR8A79_2Nr6oAbdI&itok=mqaFFJ4S",
                    "link": "https://www.zaobao.com.sg/podcast/finance-talk",
                    "tag_name" : '理财万事通',
                    "tag_id" : '12131'
                  },
                  {
                    "title": "创新声 Playlist",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202003/20200319/podcast-singoursong-playlist-ruth-kueo.png?b8pXK8ZeYuDJDNZSfWcgEZOeeyz0RZ._&itok=agkC1ICp",
                    "link": "https://www.zaobao.com.sg/podcast/sing-our-song-playlist",
                    "tag_name" : '创新声Playlist',
                    "tag_id" : '46101'
                  },
                  {
                    "title": "老总Group Chat",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-05/Editors_Groupchat_Podcast_rotator_new_5.png?uBdxS4XvIeDtpuBVECIIqYe2T0.wFksS&itok=XDwS2Nlh",
                    "link": "https://www.zaobao.com.sg/podcast/editors-group-chat",
                    "tag_name" : '老总Group Chat',
                    "tag_id" : '10047'
                  },
                  {
                    "title": "Lim Teh来讲古",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202005/20200518/limtehlai_jiang_gu_-podcast-episode6.png?7qGQuwR07C7l6u7LRfQ7lugiUx5bo2IT&itok=zya9VYjP",
                    "link": "https://www.zaobao.com.sg/podcast/hokkien-me",
                    "tag_name" : "Lim Teh来讲古",
                    "tag_id" : '10112'
                  },
                  {
                    "title": "一天一悟",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-05/UFM_Daily_Reflections_Podcast_Rotator_1.jpg?y1Fuhdact7FPMW1Ms2SBcG4YyX0gWnSq&itok=8Dyi9K_P",
                    "link": "https://www.zaobao.com.sg/podcast/stories-soul",
                    "tag_name" : '一天一悟',
                    "tag_id" : '10109'
                  },
                  {
                    "title": "心灵小故事",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-05/UFM_Stories_For_The_Soul_News_Rotator_0.jpg?R_RdmbHJFYQ5kicwX5CNPn7QGhxikPu2&itok=0TBZUza7",
                    "link": "https://www.zaobao.com.sg/podcast/daily-reflections",
                    "tag_name" : '心灵小故事',
                    "tag_id" : '11728'
                  }
                ]
              },
              {
                "sectionTitle": "直播",
                "items": [
                  {
                    "title": "新闻抢先看",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-05/20210521_qiangxian.jpg?FmUJsF3AxtYpWMhC681.zN84nFNFm0fO&itok=J9qyoi6F",
                    "link": "https://www.zaobao.com.sg/livestream/cmgnewsroom",
                    "tag_name" : '新闻抢先看',
                    "tag_id" : '9927'
                  },
                  {
                    "title": "直播讲座",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-04/the-lower-class-of-the-chinese-community-in-19th-century-singapore-video-cover-live.png?mLrjnHw0NyxtJtCo7epiHhrGDtWY4FNZ&itok=H3z9uKyU",
                    "link": "https://www.zaobao.com.sg/livestream/talk",
                    "tag_name" : '直播讲座',
                    "tag_id" : '21601'
                  },
                  {
                    "title": "现场直击",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/images/202010/20201027/20201027_news_doraemon.jpg?6HRioCAnFZ3FxQaq1.41hUtW9jscJcXe&itok=RYYwkeP-",
                    "link": "https://www.zaobao.com.sg/livestream/news",
                    "tag_name" : '现场直击',
                    "tag_id" : '19346'
                  },
                  {
                    "title": "特别企划",
                    "image": "https://static.zaobao.com/s3fs-public/styles/article_medium_crop/public/2021-04/Rotator5.jpg?aDV13waX1tP_jnlF0EftkQ__4tzY09TV&itok=XU11oiXy",
                    "link": "https://www.zaobao.com.sg/livestream/project",
                    "tag_name" : '特别企划',
                    "tag_id" : '13542'
                  }
                ]
              }
            ],
      slides: [
        {
          title: 'Ah Boy 封神榜',
          subtitle: '系列节目',
          link: 'https://www.zaobao.com.sg/video-series/ah-boy-dont-play-pray',
          image: 'https://www.zaobao.com.sg/sites/default/files/styles/article_medium_crop/public/images/202012/20201230/nr_article_image_ep5.jpg?itok=K_bjdiNA'
        },
        {
          title: '有课到',
          subtitle: '系列节目',
          link: 'https://www.zaobao.com.sg/video-series/attendtion',
          image: 'https://www.zaobao.com.sg/sites/default/files/styles/article_medium_crop/public/images/202010/20201008/20201009-attendtion-on-smartphone-ang-yiling-article-cover.png?itok=wGmQM8n6'
        },
        {
          title: '“疫”起过生活',
          subtitle: '系列节目',
          link: 'https://www.zaobao.com.sg/video-series/come-n-live',
          image: 'https://www.zaobao.com.sg/sites/default/files/styles/article_medium_crop/public/images/202007/20200715/20200717-come-n-learn-digital-kendra-ong-article-cover.png?itok=D1fWxNtU'
        }
      ]
    }
  },
  watch: {
    cards (newVal, oldVal) {
      app.loading = false
    }
  },
  mounted () {
    // this.toggleDarkmode ()
    // this.callApi ()
    if (this.isAndroid) {
      this.os = 'AndroidOS'
    }

    if (this.isIOS) {
      this.os = 'iOS'
    }
  },
  methods : {
    callApi () {
      axios.get('https://api.sph.pm/wp-json/wp/v2/pages/28')
        .then(({data}) => {
          console.log(data,'axios')
          this.feature = data.acf.top_slider
        })
    },
    goToListing(link) {
      if (this.isAndroid) {
        console.log(this.isAndroid, 'Android')
        Android.callNative(`{"open_tag":{"tag_id": "${link.tag_id}","tag_name": "${link.tag_name}"}}`);
      } else if (this.isIOS) {
        console.log(this.isIOS, 'iOS')
        this.iOSCallUrl(link.tag_name)
        // window.alert('I am ios')
      }
    },
    iOSCallUrl(keyword) {
      console.log(keyword)
      window.location.href = `tactical://push/list?keyword=${keyword}`
    },
    toggleDarkmode () {
      this.isDark =! this.isDark;
      const html = document.getElementById('html');
      html.classList.toggle('dark');
    },
  }
})