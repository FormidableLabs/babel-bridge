export function parseBooleanEnvVar(value: string) {
  return ['true', '1', 'yes'].includes(value.toLowerCase());
}
