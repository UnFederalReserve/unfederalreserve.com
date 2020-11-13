
export function trimString(str, limit) {
  // eslint-disable-next-line prefer-template
  return str.length > limit ? str.substring(0, limit - 3) + '...' : str;
}

export function getImageTitle(name, path, index) {
  if (name && path) {
    const nameToLowerCase = name.toLowerCase().replace(/ /g, '-');
    const typoArray = path.split('.');
    const newIndex = index + 1;
    if (newIndex) return `${nameToLowerCase}-${newIndex}.${typoArray[1]}`;
    return `${nameToLowerCase}.${typoArray[1]}`;
  }
  return path || name;
}
