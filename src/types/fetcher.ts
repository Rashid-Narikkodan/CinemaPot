export type FetcherInput = {
  page?: number;
  options?: {
    timeWindow?: "day" | "week";
  };
  params?: Record<string, unknown>;
};
