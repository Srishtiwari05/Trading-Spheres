import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityEnabled = Boolean(projectId && dataset);

type SanityClientLike = {
  fetch: <T = any>(query: string, params?: Record<string, unknown>) => Promise<T>;
};

export const client: SanityClientLike = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: false,
    })
  : {
      fetch: async <T = any>() => [] as unknown as T,
    };
