<template>
  <div class="fsa-header-app">
    <div class="fsa-header-app__bd">
      <div class="fsa-header-app__primary">
        <router-link to="/" class="fsa-header-app__home-link">
          <span class="fsa-header-app__app-name">
            <abbr class="fsa-header-app__app-abbr" :title="appTitleValue">{{ APP_ABBR_NAME }}</abbr>
            <span class="fsa-header-app__app-full">{{ APP_FULL_NAME }}</span>
          </span>
        </router-link>
      </div>
      <div class="fsa-header-app__secondary">
        <span class="fsa-header-app__profile">
          <a :href="LOGOFF_URL" class="fsa-header-app__profile-link">
            <span class="fsa-header-app__profile-name">{{ PROFILE_NAME }}</span>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    APP_ABBR_NAME: String,
    APP_FULL_NAME: String,
    PROFILE_NAME: String,
    LOGOFF_URL: String,
  },

  setup(props){

    const appTitleValue = computed(() => {
      return props.APP_ABBR_NAME + " Prototype Kit"
    });

    return {
      appTitleValue,
    }
  }
}
</script>