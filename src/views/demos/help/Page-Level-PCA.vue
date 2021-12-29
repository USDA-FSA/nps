<template>
  <div>

    <baseHeader NAV_TYPE="page-level-help"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m--none">Payment Certification Approval</h1>
              <div class="fsa-level fsa-level--justify-between fsa-level--grow-auto">
                <span>
                  <button @click="showModal(helpModalId)" class="fsa-btn fsa-btn--block fsa-btn--flat" type="button">
                    <svg class="fsa-icon fsa-icon--size-1" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>
                    Help
                  </button>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="fsa-section">
        <div class="fsa-section__bd">

          <!-- App Data START-->
          <app-data></app-data>
          <!-- App Data END-->

          

          <h3>Original Payment Summary</h3>
          
          <div class="fsa-section">
            <div class="fsa-section__bd">
              <table class="fsa-table fsa-table--borderless fsa-table--responsive fsa-table--responsive-horizontal">
                <thead>
                  <tr>
                    <th scope="col">Alternate Payee</th>
                    <th scope="col">Address</th>
                    <th scope="col" class="fsa-text-align--right">Amount($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th aria-label="Alternate Payee" scope="row"><span class="fsa-text-allcaps">Joe Collinsworth</span></th>
                    <td aria-label="Address">
                      <span class="fsa-text-allcaps">4325 E Huckerburn RD</span>
                      <span class="fsa-text-allcaps"></span>
                      <div class="fsa-level">
                        <span class="fsa-text-allcaps">Malhogany</span>
                        <span class="fsa-text-allcaps">MO</span>
                        <span class="fsa-text-allcaps">62109</span>
                      </div>
                    </td>
                    <td aria-label="Amount($)" class="fsa-text-align--right"><span class="fsa-text-allcaps">(-) 135.50</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="fsa-section fsa-section--dark">
            <div class="fsa-section__bd">

              <table class="fsa-table fsa-table--borderless fsa-table--responsive fsa-table--responsive-horizontal">
                <thead>
                  <tr>
                    <th scope="col">Disbursement Payee</th>
                    <th scope="col">Address</th>
                    <th scope="col" class="fsa-text-align--right">Amount($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th aria-label="Disbursement Payee" scope="row"><span class="fsa-text-allcaps">Collinsworth Farms, Inc.</span></th>
                    <td aria-label="Address">
                      <span class="fsa-text-allcaps">4325 E Huckerburn RD</span>
                      <span class="fsa-text-allcaps"></span>
                      <div class="fsa-level">
                        <span class="fsa-text-allcaps">Malhogany</span>
                        <span class="fsa-text-allcaps">MO</span>
                        <span class="fsa-text-allcaps">62109</span>
                      </div>
                    </td>
                    <td aria-label="Amount($)" class="fsa-text-align--right"><span class="fsa-text-allcaps">135.50</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="fsa-m-t--l">
            <div class="fsa-level">
              <span>Action: </span>
              <span>
              <selection
                  :ID="actionsId"
                  LABEL=""
                  :DATA="actionsData"
                  REQUIRED="true"
                  SELECT_CLASSES="fsa-select--large fsa-select--block"
                  EXTRA_CLASSES=""
                  FIELD_ERROR_CLASS=""
                  ARIA_REQUIRED="true"
                  HELP_MESSAGE=""
                  ERROR_MESSAGE=""
                >
                </selection>
              </span>
              <span class="fsa-m-t--xs">
                <button class="fsa-btn fsa-btn--primary">Submit</button>
              </span>            
            </div>
          </div>

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

const selection = defineAsyncComponent(() => import('@/components/selection/selection.vue'));
const appData = defineAsyncComponent(() => import('@/views/demos/shared/App-Data.vue'));

const pageLevelHelpModal = defineAsyncComponent(() => import('@/views/demos/help/Page-Level-Help-Modal.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    selection,
    appData,
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
    

    const actionsId = ref(uuidv4());
    const actionsData = [
      { id: "a0", label: "Select an Action", name: "actionsGroup", val: 0, isDisabled: true, isSelected: true },
      { id: "a1", label: "Defer", name: "actionsGroup" },
      { id: "a2", label: "Approve", name: "actionsGroup" },
      { id: "a3", label: "Reset Payment Processing", name: "actionsGroup" },
      { id: "a4", label: "Reset Address", name: "actionsGroup" },
      { id: "a5", label: "Hold for Cancel by Program", name: "actionsGroup" }
    ];


    onMounted(()=>{
      console.log('Payments onMounted');
    });

    return {
      showModal,
      hideModal,
      helpModalId,
      actionsId,
      actionsData
    }
  }

}
</script>