export const nameShorter = (str: string): string =>
  str.length > 45 ? str.replace(/^(.{11}[^\s]*).*/, '$1...') : str
