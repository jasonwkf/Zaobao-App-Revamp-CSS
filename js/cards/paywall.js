Vue.component('paywall', {
  template: 
  `<div id='paywall' class='article-transaction'>
    <div class='cta-subscribe'>
      <h2 class='text-gray-900 pb-4 px-4 dark:text-white'>请<a href='#' style="font-size: 1.0556rem;" class="text-zaobao-500 dark:text-zaobao-950">登录</a>或<a href='#' style="font-size: 1.0556rem;" class="text-zaobao-500 dark:text-zaobao-950">订阅</a>，以继续阅读全文！</h2>
        <div class='bg-gray-100 py-4 px-3 dark:bg-gray-800'>
          <h2 class='text-gray-900 text-base font-medium pb-2 dark:text-gray-300'>此文章为早报订户专享内容，该内容包括：</h2>
          <ul class='list-inside list-disc text-sm text-gray-500 leading-5'>
            <li>独家新闻、人物专访、专题特写、系列报道</li>
            <li>重大新闻事件的幕后故事</li>
            <li>记者侧记</li>
            <li>世界各地特派员的第一手报道</li>
            <li>资深记者与专栏作家的精辟言论和想法</li>
          </ul>
          <div class='pt-4 pb-5 text-center'>
            <a href='#' class='text-white text-sm font-medium tracking-wider rounded-full px-5 py-2 bg-zaobao-500'>查看新订户优惠</a>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  data () {
    return {}
  },
  props : {

  },
  mounted () {

  },
  methods : {

  }
})