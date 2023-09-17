function capitalize(string) {
  if(string.length === 0 || typeof(string) !== 'string'){
    return null
  }
  return string[0].toUpperCase() + string.substring(1);
}

export {capitalize}