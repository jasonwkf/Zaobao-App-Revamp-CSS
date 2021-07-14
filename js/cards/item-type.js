Vue.component('itemtype', {
  template: 
    `<div id='item-type-container' class='aspect-w-8 aspect-h-5'>
      <div class='item-type' v-show="propsitemtype.toLowerCase() =='gallery'"><img class='gallery-icon' src='./assets/icons/galleryIcon.png'/></div>
      <div class='item-type-video' v-show="propsitemtype.toLowerCase() =='interactive'"><img class='interactive-icon' src='./assets/icons/interactiveIcon.png'/></div>
      <div class='item-type' v-show="propsitemtype.toLowerCase() =='podcast'"><img class='podcast-icon' src='./assets/icons/podcastIcon.png'/></div>
      <div class='item-type-video' v-show="propsitemtype.toLowerCase() =='video'"><img class='video-icon' src='./assets/icons/icon-play-white.svg'/></div>
    </div>
    `,
  props: {
    propsitemtype: {
      type: String
    }
  },
  mounted () {
  }
})