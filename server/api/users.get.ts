import { useMainStore } from '~/stores/mainStore';
import { createPinia } from 'pinia';
import { string, z } from 'zod';
import { searchUsers, filterById, filterByStatus } from '~/utils';

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

  let search, id, status: string | undefined;
  let result: Array<User> = store.users;

  console.log('query', query)
  if (query.data) {
    search = query.data.search;
    id = query.data.id;
    status = query.data.status;
  }

  if (search) result = searchUsers(search, result);

  if (id) result = filterById(parseInt(id), result);
  
  if (status) {
    console.log('filterByStatus(status, result);', filterByStatus(status, result))
    result = filterByStatus(status, result);
    
  } 

  console.log('result', result.length)
  if (user) return { users: result };
});
