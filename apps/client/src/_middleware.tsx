import { useEffect, useState } from 'react';
import * as data from '../data';
import routes from '../../../routes.json';
import * as pages from '../../../pages';

export function useMiddleware(pathname: string) {
  //@ts-ignore
  const [pageData, setPageData] = useState(data[pathname] ?? {});

  useEffect(() => {
    const getPageProps = async () => {
      //@ts-ignore
      const { props, revalidate }: any = await pages[`props${pathname}`]();

      setPageData(props);
    };

    getPageProps();
  }, [pathname]);

  return pageData;
}
