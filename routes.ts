import About, { cached } from './apps/client/src/pages/about';
import Contacts, { SSR } from './apps/client/src/pages/contacts';
export const routes = {
  about: { page: About, props: cached(), isStatic: true },
  contacts: { page: Contacts, props: SSR(), isStatic: false },
};
