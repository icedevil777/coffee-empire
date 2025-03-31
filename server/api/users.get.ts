import { useMainStore } from '~/stores/mainStore';
import { createPinia } from 'pinia';
import { z } from 'zod';
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
  if (query.data) {
    search = query.data.search;
    id = query.data.id;
    status = query.data.status;
  }
  if (search) result = searchUsers(search, result);
  if (id) result = filterById(parseInt(id), result);
  if (status) result = filterByStatus(status, result);
  if (user) return { users: result };
});
