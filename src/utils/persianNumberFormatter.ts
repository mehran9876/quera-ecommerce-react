const persianNumberFormatter = (number: number) =>
  Intl.NumberFormat("fa-IR").format(number);

export default persianNumberFormatter;
