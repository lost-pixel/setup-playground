'use client';
import { initQueryClient } from '@ts-rest/react-query';
import { apiBlog } from '@no-code/contracts';

export const client = initQueryClient(apiBlog, {
  baseUrl: 'http://localhost:3000/api',
  baseHeaders: {},
});

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Providers;
