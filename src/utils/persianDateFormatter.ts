const persianDateFormatter = (date: Date | string | number) =>
  Intl.DateTimeFormat("fa-IR").format(new Date(date));
export default persianDateFormatter;
