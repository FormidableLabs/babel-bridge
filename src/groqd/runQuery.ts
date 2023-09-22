import { sanityClient } from "../lib";
import { makeSafeQueryRunner } from "groqd";

export const runQuery = makeSafeQueryRunner(
  (query, params: Record<string, unknown> = {}) =>
    sanityClient.fetch(query, params)
);
