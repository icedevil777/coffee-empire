import { useMainStore } from '~/stores/mainStore';
import { createPinia } from 'pinia';

const pinia = createPinia();
const store = useMainStore(pinia);

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);
  if (user) return { users: store.users };
});
