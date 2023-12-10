export type RouteError = {
  statusCode: number;
  error: string;
  message: string;
};
export type RouteHeaders = {
  'Sanity-Access-Token': string;
  'Open-Ai-Api-Key': string;
};
export type RouteReply = {
  200: any;
  400: RouteError;
  500: RouteError;
};
export type RouteQueryString = {
  projectId: string;
  dataset: string;
};
