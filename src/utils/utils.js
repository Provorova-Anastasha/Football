export const filterByField = (data, field, searchValue) => {
  return data.filter(
    (item) =>
      item[field] &&
      (typeof item[field] === "string" ? item[field] : item[field].name)
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
  );
};
