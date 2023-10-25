export function camelCase(string: string): string {
  return string.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

export function titleCase(string: string): string {
  return string
    .split(` `)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(` `)
}

export function pascalCase(string: string): string {
  return titleCase(camelCase(string))
}

export function createFieldName(name: string, addValue = false): string {
  return addValue
    ? [`internationalisedArray`, pascalCase(name), `Value`].join(``)
    : [`internationalisedArray`, pascalCase(name)].join(``)
}