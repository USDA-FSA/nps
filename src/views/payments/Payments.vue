<template>
  <div>

    <baseHeader></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m--none">Payments Dashboard</h1>
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

          <!-- Tabs START-->
          <div class="fsa-content-tabs fsa-content-tabs--justified-equal">
            <ul class="fsa-content-tabs__list">
              <li class="fsa-content-tabs__item">
                <a class="fsa-content-tabs__label fsa-content-tabs__label--active" aria-current="step" href="#link">
                  <span class="fsa-content-tabs__label-text">Manual Handling</span>
                </a>
              </li>
              <li class="fsa-content-tabs__item">
                <a class="fsa-content-tabs__label" href="#link">
                  <span class="fsa-content-tabs__label-text">Certification</span>
                </a>
              </li>
              <li class="fsa-content-tabs__item">
                <a class="fsa-content-tabs__label" href="#link">
                  <span class="fsa-content-tabs__label-text">Signing</span>
                </a>
              </li>
              <li class="fsa-content-tabs__item">
                <a class="fsa-content-tabs__label" href="#link">
                  <span class="fsa-content-tabs__label-text">Reset Held Payment</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- Tabs END-->

          <!-- Tabs Body START-->
          <div class="fsa-m-t--l">

            <div class="fsa-grid">
              <div class="fsa-grid__1 fsa-grid__1/2@l">
                <fieldset>
                  <h3 class="fsa-m-t--none">Customer Name</h3>
                  <div class="fsa-field">
                    <label class="fsa-field__label" id="2-column-example__lorem-radio-field-1">Name Match</label>
                    <ul class="fsa-form-list" aria-labelledby="2-column-example__lorem-radio-field-1">
                      <li>
                        <span>
                          <input class="fsa-radio" id="2-column-example__pumpkin-radio" type="radio" name="2-column-example__fav-pie-zz99" checked>
                          <label for="2-column-example__pumpkin-radio">Starts with</label>
                        </span>
                      </li>
                      <li>
                        <span>
                          <input class="fsa-radio" id="2-column-example__none-radio" type="radio" name="2-column-example__fav-pie-zz99">
                          <label for="2-column-example__none-radio">Exact Match</label>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="fsa-field">
                    <label class="fsa-field__label" for="2-column-example__TheItem2">Last name or Business Name <span class="fsa-field__label-desc">Required</span></label>
                    <input class="fsa-input fsa-field__item" id="2-column-example__TheItem2" aria-describedby="2-column-example__lorem-1234-help-9" name="2-column-example__TheItem2" type="text" value="">
                    <span class="fsa-field__help" id="2-column-example__lorem-1234-help-9">Example: Doe</span>
                  </div>
                  <div class="fsa-field">
                    <label class="fsa-field__label" for="2-column-example__TheItem2q5">First Name</label>
                    <input class="fsa-input fsa-field__item" id="2-column-example__TheItem2q5" aria-describedby="2-column-example__lorem-1234-help-24369" name="2-column-example__TheItem2q5" type="text" value="">
                    <span class="fsa-field__help" id="2-column-example__lorem-1234-help-24369">Instructional message here</span>
                  </div>
                </fieldset>
              </div>
              <div class="fsa-grid__1 fsa-grid__1/2@l">
                <fieldset>
                  <h3 class="fsa-m-t--none">Customer Tax ID</h3>
                  <div class="fsa-field">
                    <label class="fsa-field__label" for="2-column-example__TheItem8">Tax ID <span class="fsa-field__label-desc">Required</span></label>
                    <input class="fsa-input fsa-field__item" id="2-column-example__TheItem8" aria-describedby="2-column-example__lorem-1234-help-8" aria-required="true" name="2-column-example__TheItem8" type="text" value="">
                    <span class="fsa-field__help" id="2-column-example__lorem-1234-help-8">Tax IDs are 8 characters, alphanumeric</span>
                  </div>
                  <div class="fsa-field">
                    <label class="fsa-field__label" id="2-column-example__lorem-radio-field-9852">Tax ID Search Length</label>
                    <ul class="fsa-form-list" aria-labelledby="2-column-example__lorem-radio-field-9852">
                      <li>
                        <span>
                          <input class="fsa-radio" id="2-column-example__sdfa24tgg-radio" type="radio" name="2-column-example__fav-pie-333333gha" checked>
                          <label for="2-column-example__sdfa24tgg-radio">Whole ID</label>
                        </span>
                      </li>
                      <li>
                        <span>
                          <input class="fsa-radio" id="2-column-example__egh5a-radio" type="radio" name="2-column-example__fav-pie-333333gha">
                          <label for="2-column-example__egh5a-radio">Last 4 digits</label>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="fsa-field">
                    <label class="fsa-field__label" for="2-column-example__UNIQUE-ID-h24rg8">Tax ID Type</label>
                    <select class="fsa-select fsa-field__item" id="2-column-example__UNIQUE-ID-h24rg8" name="2-column-example__UNIQUE-ID-h24rg8" aria-describedby="2-column-example__lorem-hshhsjtext-help-4">
                      <option value="SSN" selected>Social Security Number (SSN)</option>
                      <option value="EIN">Employer Identification Number (EIN)</option>
                      <option value="ITIN">Individual Taxpayer Identification Number (ITIN)</option>
                      <option value="ATIN">Taxpayer Identification Number for Pending U.S. Adoptions (ATIN)</option>
                      <option value="PTIN">Preparer Taxpayer Identification Number (PTIN)</option>
                    </select>
                    <span class="fsa-field__help" id="2-column-example__lorem-hshhsjtext-help-4">You may choose a type other than the default, Social Security Number (SSN)</span>
                  </div>
                </fieldset>
              </div>
            </div>
            <div class="fsa-field">
              <button @click="searchPayments" type="submit" class="fsa-btn fsa-btn--primary">Search</button>
            </div>
          </div>
          <!-- Tabs Body END-->
          <table class="fsa-table">
            <caption>
              <h3>Search Results</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col" aria-sort="ascending" class="fsa-text-align--left"><button id="tableSort-1" @click="toggleSort($event)" class="fsa-table__sort fsa-table__sort--ascending" type="button">ID</button></th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody v-if="users">
              <tr v-for="(user, id) in users" v-bind:key="id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div tabindex="0" :id="helpModalId" class="fsa-modal fsa-modal--top" role="dialog" aria-hidden="true">
        <div class="fsa-modal__dialog">
          <div class="fsa-modal__content">
            <button @click="hideModal(helpModalId)" class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
            <h1 class="fsa-modal__title">Help Header</h1>
            <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla?</p>
            <p>Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis!</p>
            <ul>
              <li><a href="">Fake Link</a></li>
              <li><a href="">Fake Link</a></li>
            </ul>
            <p>Amet tempore, sint mollitia facere, dolore velit, similique dolorem est ducimus dolorum molestiae totam molestias eveniet delectus accusamus saepe! Odio, libero quasi.</p>
            <p>Quis aspernatur assumenda fugiat voluptatibus suscipit quos autem doloremque, amet deleniti facilis, aperiam ex magnam pariatur odit expedita eos voluptatem minus labore!</p>
            <p>Amet deserunt commodi velit officia suscipit magnam praesentium explicabo delectus animi. Sapiente beatae adipisci saepe perferendis, iste quaerat aperiam vero architecto provident.</p>
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
const selectMulti = defineAsyncComponent(() => import('@/components/select-multi/select-multi.vue'))
 
export default {
  components: {
    baseHeader,
    baseFooter,
    field,
    fieldGroup,
    selection,
    selectMulti
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