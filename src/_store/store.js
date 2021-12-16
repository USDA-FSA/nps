
import { createStore } from 'vuex';

import { navigation } from './navigation.module.js';
import { users } from './users.module.js';
import { search } from './search.module.js';
import { web } from './web.module.js';

export const store = createStore({
  modules: {
    navigation: navigation,
    search: search,
    users: users,
    web: web
  }
});