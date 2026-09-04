import "@tanstack/react-query";

interface Meta extends Record<string, unknown> {
  shouldBeHandledByGlobalErrorHandler?: boolean;
}

declare module "@tanstack/react-query" {
  interface Register {
    queryMeta: Meta;
    mutationMeta: Meta;
  }
}
