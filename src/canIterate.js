function canIterate(obj) {
  if (obj && Object.getPrototypeOf(obj)[Symbol.iterator]) {
    return true;
  }
  return false;
}