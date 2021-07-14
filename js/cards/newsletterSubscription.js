Vue.component('newletter-subscription', {
  template:
    `<article :class="'bg-gray-' + css.light">
      <divider></divider>
      <div class='rounded-lg border-2 m-4 p-4' style="height: 262px; border-color: #fff3a3;">
        <div class='flex'>
          <div>
            <img src='./assets/icons/edmgraphic.png'/>
            <h2 class='text-xl text-center' style='color: #ffd419;'>电邮速递</h2>
          <div>
        <div>
      </div>
      <divider></divider>
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
      default: {
        light: '',
        dark: ''
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