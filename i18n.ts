import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default getRequestConfig(async ({locale}) => {
  try {
    return {
      messages: (await import(`./messages/${locale}.json`)).default
    };
  } catch (error) {
    notFound();
  }
});
