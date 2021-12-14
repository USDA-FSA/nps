<template>
  <footer>
    <footerTopper></footerTopper>
    <footerFooter APP_ABBR_NAME="NPS">
    </footerFooter>
    <footerScreenId
      SCREEN_ID="NPS-WEB006">
    </footerScreenId>
    
    <hiddenItems></hiddenItems>

  </footer>
</template>

<script>

import footerTopper from '@/components/footer/footer-topper.vue';
import footerFooter from '@/components/footer/footer-footer.vue';
import footerScreenId from '@/components/footer/footer-screen-id.vue';
import hiddenItems from '@/components/hidden/hidden-items.vue';

export default {
  components: {
    footerTopper,
    footerFooter,
    footerScreenId,
    hiddenItems
  },

  setup(props){

  }  
}
</script>