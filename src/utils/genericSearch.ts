function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSens?: boolean
): boolean {
  if (query === "") return true;

  return properties.some((property) => {
    const value = object[property];

    if (typeof value === "string" || typeof value === "number") {
      if (shouldBeCaseSens) {
        return value.toString().toLowerCase().includes(query.toLowerCase());
      }
      return value.toString().includes(query);
    }

    return false;
  });
}

export default genericSearch;
