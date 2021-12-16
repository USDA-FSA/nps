<template>
  <div>

    <baseHeader NAV_TYPE="inline-help"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <h1 class="fsa-m--none">Payment Certification Approval</h1>
          </div>
        </div>
      </div>
      <div class="fsa-section">
        <div class="fsa-section__bd">

          <!-- App Data START-->
          <app-data></app-data>
          <!-- App Data END-->

          
        </div>
      </div>
      
      <div class="fsa-section">
        <div class="fsa-section__bd">

          <stepped-control
            EXTRA_CLASSES="fsa-stepped-control--sticky"
            DISPLAY_MESSAGE="true"
            CURRENT_STEP="1"
            TOTAL_STEPS="5"
            BACK_LABEL="Back"
            BACK_URL="/"
            USE_GROWL_ON_CANCEL="true"
            GROWL_ID="stepped-control-growl-id"
            URL_PREFIX="fsa"
            USE_GROWL_ON_SUBMIT="true"
            ON_SUBMIT_GROWL_ID="stepped-control-submit-growl-id"
            CONTINUE_LABEL="Continue"
            CONTINUE_URL="/demo/modal-growl/">
          </stepped-control>

        </div>
      </div>

      
      <page-level-help-modal :MODAL_ID="helpModalId"></page-level-help-modal>

      <!-- PLACE JUST BELOW BODY START TAG AT THE BEGINNING OF DOCUMENT -->
      <div class="fsa-whiteout" tabindex="-1" id="fsa-whiteout" aria-hidden="true"></div>
      <!-- END WHITEOUT -->

      <div class="fsa-growl-container fsa-growl-container--centered">
        <div class="fsa-growl fsa-growl--error fsa-growl--centered" id="UNIQUE-ID-9469E21387FAF609" aria-hidden="true" tabindex="0" role="alertdialog">
          <div class="fsa-growl__hd">
            <button class="fsa-growl__close" data-behavior="growl-dismiss whiteout-dismiss" type="button">
              <svg class="fsa-icon fsa-icon--size-3" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
            <h2 class="fsa-growl__title">Cancel Process</h2>
          </div>
          <div class="fsa-growl__bd">
            <p>Message goes here if you like or something, <a href="link.html">with a link</a> if necessary.</p>
            <p>And another line here for kicks.</p>
            <p>
              <button data-behavior="growl-dismiss whiteout-dismiss" class="fsa-btn fsa-btn--small fsa-btn--secondary" type="button">Button</button>
              <a class="fsa-btn fsa-btn--small fsa-btn--secondary" href="link.html">Button link</a>
            </p>
          </div>
        </div>
      </div>
      

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, computed, watch, defineAsyncComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useNavigation } from '@/composables/useNavigation';
import { useModalControls } from '@/composables/useModalControls';
import { v4 as uuidv4 } from 'uuid';

import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

const field = defineAsyncComponent(() => import('@/components/field/field.vue'));
const fieldGroup = defineAsyncComponent(() => import('@/components/field-group/field-group.vue'));
const selection = defineAsyncComponent(() => import('@/components/selection/selection.vue'));
const appData = defineAsyncComponent(() => import('@/views/demos/shared/App-Data.vue'));

const steppedControl = defineAsyncComponent(() => import('@/components/stepped-control/stepped-control.vue'));

const pageLevelHelpModal = defineAsyncComponent(() => import('@/views/demos/help/Page-Level-Help-Modal.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
    fieldGroup,
    selection,
    appData,
    steppedControl,
    pageLevelHelpModal
  },

  setup(props){
    const store = useStore();
    const { goto } = useNavigation();
    const {
      setModalId,
      getModalId,
      showModal,
      hideModal
    } = useModalControls();

    const helpModalId = ref( uuidv4() );
    setModalId(helpModalId.value);
    
    const nameField = ref(null);
    
    const vehicleField = ref(null);
    const animalField = ref(null);

    const stateField = ref(null);
    const stateData = [
      { id: "state1", label: "Alabama", name: "stateGroup" },
      { id: "state2", label: "Alaska", name: "stateGroup" },
      { id: "state3", label: "Arizona", name: "stateGroup" },
      { id: "state4", label: "Arkansas", name: "stateGroup" },
    ];

    const countyData = [
      { id: "county1", label: "Adair", name: "countyGroup" },
      { id: "county2", label: "Abner", name: "countyGroup" },
      { id: "county3", label: "Abner", name: "countyGroup" },
      { id: "county4", label: "Abner", name: "countyGroup" },
    ];

    const addFiltersData = [
      { id: "addFilter1", label: "Tax Id", name: "addFilterGroup" },
      { id: "addFilter2", label: "Name", name: "addFilterGroup" },
      { id: "addFilter3", label: "All", name: "addFilterGroup" },
    ];


    // Fake Data Code start
    const usersData = computed( () => store.getters['users/getUsers'] );
    let users = ref([]);
    let isSortAsc = ref(true);
    const getUsersData = () => {
      store.dispatch('users/getUsersFromApi');
    }

    const toggleSort = (e) => {
      let id = e.currentTarget.id;
      isSortAsc.value = !isSortAsc.value;
      if(isSortAsc.value){
        users.value = usersData.value.sort( (a, b) => a.id - b.id );
        document.getElementById(id).classList.remove('fsa-table__sort--descending')
        document.getElementById(id).classList.add('fsa-table__sort--ascending')
        document.getElementById(id).ariaSort = 'ascending'
      } else {
        users.value = usersData.value.sort( (a, b) => b.id - a.id );
        document.getElementById(id).classList.remove('fsa-table__sort--ascending')
        document.getElementById(id).classList.add('fsa-table__sort--descending')
        document.getElementById(id).ariaSort = 'descending'
      }
    }
    // Fake Data Code End

    const searchPayments = () => {
      console.log('searchPayments');
      getUsersData();
    }

   

    watch(usersData, (val) => {
      users.value = val;
    })

    onMounted(()=>{
      console.log('Payments onMounted');
    });

    return {
      nameField,
      users,
      getUsersData,
      toggleSort,
      searchPayments,
      showModal,
      hideModal,
      helpModalId
    }
  }

}
</script>