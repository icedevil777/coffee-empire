import { useMainStore } from '~/stores/mainStore';
import { createPinia } from 'pinia';
import { z } from 'zod';

const pinia = createPinia();
const store = useMainStore(pinia);

const querySchema = z.object({
  id: z.string().max(3).optional(),
  status: z.string().optional(),
  search: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);

  const query = await getValidatedQuery(event, (body) => querySchema.safeParse(body));

  console.log('query', query);

  if (user) return { users: store.users };
});
