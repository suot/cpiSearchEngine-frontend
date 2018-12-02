<template>
  <nav class="layout-footer footer" :class="getLayoutFooterBg()">
    <div class="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
      <div class="pt-3">
        <span class="footer-text font-weight-bolder">Alumni Carpool</span> ©
      </div>
      <div>
        <a href="javascript:void(0)" class="footer-link pt-3"><span @click="showModal_avatar_team">About Us</span></a>
        <a href="javascript:void(0)" class="footer-link pt-3 ml-4">Help</a>
        <a href="https://github.com/hongshuidang/cpisearch" class="footer-link pt-3 ml-4">Contribute</a>
      </div>
    </div>
  </nav>
</template>

<script>
import swal from 'sweetalert2';
import '@/vendor/libs/Animation.css';

export default {
  name: 'app-layout-footer',

  components: {
    swal,
  },

  methods: {
    getLayoutFooterBg () {
      return `bg-${this.layoutFooterBg}`
    },

    showModal_avatar_team(){
      let url = this.baseUrl+"img/team.jpg";
      // let htmlText = '<div><font size="2">Suo Tian</font></div>';
      let altMsg = 'Team\'s photo';
      let tags = ["Suo Tian", "Ittsel Ali", "Pratik Sanghvi", "Yan Zhang", "Shouhong Zheng"];
      let badges = "";
      for(let i in tags){
        badges += '<button class="d-inline-block mr-2" style="border-color: transparent; background: #26B4FF; color: #fff;">' + tags[i] + '</button>';
      }

      swal({
          // html: htmlText,
          imageUrl: url,
          imageAlt: altMsg,
          showConfirmButton: false,
          footer: badges,
          buttonsStyling: false,
          animation: false,
          customClass: 'animated zoomIn'
      });
    },
  }
}
</script>
