interface IReturnUseSelect {
  selectedTitle: string;
  selectedValue: string;
}

export const useSelect = (
  listForSelect: Array<any>,
  e: string
): IReturnUseSelect => {
  console.log("e.target", e);
  const text: string = e;
  const filteredList: Array<(typeof listForSelect)[0]> = listForSelect.filter(
    (el: (typeof listForSelect)[0]): boolean => el.title === text
  );
  console.log("filteredList", filteredList);

  return {
    selectedTitle: text,
    selectedValue: filteredList[0]?.template,
  };
};
