import { useEffect, useState } from 'react';
import axios from 'axios';

export function useMiddleware(pathname: string) {
  const [pageData, setPageData] = useState({});

  useEffect(() => {
    const getPageProps = async () => {
      const response = await axios.get(
        `http://localhost:4001/props${pathname}`
      );

      setPageData(response.data);
    };

    getPageProps();
  }, [pathname]);

  return pageData;
}
