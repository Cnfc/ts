function genericSearch<T>(object: T, properties: Array<keyof T>, query: string): boolean {
  const expression = properties.map((property) => {
    const value = object[property];

    if (typeof value === "string" || typeof value === "number") {
      return value.toString().includes(query);
    }

    return false;
  });

  return expression.some((expression) => expression);
}

export default genericSearch;
