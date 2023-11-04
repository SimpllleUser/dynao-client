const isPartStringInOtherString = (partOfText: string) => (text: string): boolean => text
  .toLowerCase()
  .includes(partOfText
    .trim()
    .toLowerCase()
  )

export const filterTextItemsByText = (items: Array<string>, text: string): Array<string> => items
  .filter(isPartStringInOtherString(text))
