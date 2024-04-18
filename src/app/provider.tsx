// app/providers.tsx
"use client";

import appTheme from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={appTheme}>{children}</ChakraProvider>;
}
