Vue.component('advertisement', {
  template:
    `<article :class="'bg-gray-' + css.light + ' dark:bg-gray-' + css.dark + ' ad-container'">
        <div class='px-8 py-3.5 text-center'>
        <h4 class="text-xs text-gray-600 pb-2">广告</h4>
          <div :id="post.data.placementId" class="newshub-container bg-gray-400" v-advertisement="post">
            <img class='w-full' :src="'./assets/images/placeholder.jpg'"/>
          </div>
        </div>
    </article>`,
  props: {
    post: {
      type: Object,
      default() {
        return {
          data: {
            sizes: ["250", "50"],
            placementId: "13787587",
            adUnitId: "/5908/ZBSGapp_iphone/inheadline1/Home",
          },
          itemType:"Banner",
          imagePlaceholder: 'assets/images/placeholder.jpg'
        }
      }
    },
    css: {
      type: Object,
      default() {
        return {
          light: '50',
          dark: '900'
        }
      }
    }
  },
  mounted () {

  },
  data() {
    return {
    }
  }
})