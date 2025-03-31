import { useMainStore } from '~/stores/mainStore';
import { createPinia } from 'pinia';
import { z } from 'zod';
import { searchUsers } from '~/utils';

const pinia = createPinia();
const store = useMainStore(pinia);

const querySchema = z.object({
  id: z.string().max(3).optional(),
  status: z.string().optional(),
  search: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);
  const query: Query = await getValidatedQuery(event, (body) => querySchema.safeParse(body));
  let search, result;

  if (query.data) search = query.data.search;
  if (search) {
    result = searchUsers(search, store.users);
    console.log('query', query);
    console.log('result', result);
    return { users: result };
  }

  if (user) return { users: store.users };
});
