import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityEnabled = Boolean(projectId && dataset);

export const client = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: false,
    })
  : ({
      fetch: async () => [],
    } as unknown);