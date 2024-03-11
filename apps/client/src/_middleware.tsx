import { useEffect, useState } from 'react';
import * as pages from '../../../pages';

export function useMiddleware(pathname: string) {
  //@ts-ignore
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const getPageProps = async () => {
      //@ts-ignore
      const { props, revalidate }: any = await pages[`props${pathname}`]();

      if (Boolean(revalidate)) {
        //@ts-ignore

        const response = await fetch(`http://localhost:4001/props${pathname}`);
        const answer = await response.json();

        setPageData(answer);
      } else {
        setPageData(props);
      }
    };

    getPageProps();
  }, [pathname]);

  return pageData;
}
