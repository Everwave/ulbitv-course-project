type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods?: Mods, add?: string[]) {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([classNames]) => classNames),
    ...add.filter(Boolean)
  ].join(' ')
}