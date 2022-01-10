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

          <div class="fsa-level@m fsa-level--justify-between fsa-level--align-bottom">
            <span class="">
              <h3>Original Payment Summary</h3>
            </span>
            <span class="fsa-m-r--s">


              <inline-help
                POPOVER_TYPE="help"
                POPOVER_CLASSES="fsa-popover--lt fsa-popover--size-large"
                ICON_SIZE="fsa-icon--size-2"
                :POPOVER_ID="summaryInlineHelpId"
                POPOVER_HEADER="Summary Help">
                <div id="summary-help-popup-body">
                  <p>Producer Disbursement will display the amount payable to the customer. No Prompt Pay Interest amount will be included due to the calculation of PPI being moved to after a payment has been signed. If customer name was modified as part of the Deceased Producer Manual Handling step, verify the customer name is displayed as intended. If customer address or assignee address was modified due to it being a foreign address, verify address is displayed as intended.</p>
                  <p><strong>NOTE:</strong> If a joint payment has been established for this program payment, both the customer name and joint payee will be displayed in this area.</p>
                  <p>The certifying officer will determine whether the payment can be certified. There are five options available to the certifying officer for individual payments and four options for payments associated with a package.</p>
                </div>
              </inline-help>



            </span>
          </div>
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
                  USE_POPOVER="true"
                  POPOVER_TYPE="help"
                  POPOVER_CLASSES="fsa-popover--rb fsa-popover--size-large"
                  :POPOVER_ID="actionsId+'-help-popover'"
                  POPOVER_HEADER="Actions Help">
                  <div :id="actionsId + '-popup-body'">
                    <p><strong>Defer</strong> - do nothing with the payment. It will remain in a deferred status until one of the other options is selected.</p>
                    <p><strong>Approve</strong> - the certifying officer accepts the payment as displayed.</p>
                    <p><strong>Reset Payment Processing</strong> - the certifying officer has determined an error in the payment transaction summary or wishes to apply offsets differently. All prompt payment processing, withholdings, and offsets will be removed from this payment. Special handling will have to be complete again for this payment before it can be certified.</p>
                    <p><strong>Reset Address</strong> - to reset address from information provided by Financial Services if address displayed is incorrect. This will only reset address information for the customer, assignee, bankruptcy trustee and county office address without resetting all special handling steps processed for the payment. This will also reset address information for foreign address but will move the payment request back to Foreign Address Manual Handling step so user make changes.</p>
                    <p><strong>Hold for Cancel by Program</strong> - the certifying officer has determine that this payment should not be made and the program application initiating the payment will be sending over a record to cancel this payment. This payment can no longer be certified unless the payment is reset. When payment is placed in this status, all associated special handling steps (i.e. prompt payment, withholdings, receivables) will be removed. This option is only available for individual payments and will be hidden for payments associated with a package.</p>
                  </div>
                </selection>


                
              </span>
              <span class="fsa-m-t--xs">
                <button class="fsa-btn fsa-btn--primary">Submit</button>
              </span>           
            </div>
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
import { v4 as uuidv4 } from 'uuid';

import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

const selection = defineAsyncComponent(() => import('@/components/selection/selection.vue'));
const appData = defineAsyncComponent(() => import('@/views/demos/shared/App-Data.vue'));
const inlineHelp = defineAsyncComponent(() => import('@/components/inline-help/inline-help.vue'));
 
export default {
  components: {
    baseHeader,
    baseFooter,
    selection,
    appData,
    inlineHelp
  },

  setup(props){
    const store = useStore();
    const { goto } = useNavigation();

    const summaryInlineHelpId = ref(uuidv4());

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
      summaryInlineHelpId,
      actionsId,
      actionsData
    }
  }

}
</script>