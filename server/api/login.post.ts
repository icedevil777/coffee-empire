import { useMainStore } from '~/stores/mainStore';
import { createPinia } from 'pinia';
import { z } from 'zod';

const pinia = createPinia();
const store = useMainStore(pinia);
const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);
  const isAuth: boolean = store.isAuthenticated(email, password);
  console.log('isAuth', isAuth, email, password);

  if (isAuth) {
    await setUserSession(event, {
      user: {
        name: email,
      },
    });
    return { answer: `${email} was authenticated` };
  }
  throw createError({
    statusCode: 401,
    message: 'Bad credentials',
  });
});
