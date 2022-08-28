export const extractor = (item: {id: string | number}) => item.id.toString();
export const capitalize = (word: string) =>
  word && word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word;
export const splitWord = (word: string) =>
  word && word.length > 0
    ? capitalize(word.split(/(?=[A-Z])/).join(' '))
    : word;
