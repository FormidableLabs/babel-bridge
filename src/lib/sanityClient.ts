import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "hakfgcdn",
  dataset: "development",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2023-09-22", // use current date (YYYY-MM-DD) to target the latest API version
});
