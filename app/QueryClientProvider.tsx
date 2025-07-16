"use client";

import {
    QueryClient,
    QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClent = new QueryClient();

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryClientProvider client={queryClent}>
      {children}
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
