import Layout from '../layout';
import { useRoute } from '../../hooks/use-route';

interface RouterProviderProps {
  children: React.ReactNode;
}

export function RouterProvider({ children }: RouterProviderProps) {
  return <Layout>{children}</Layout>;
}
