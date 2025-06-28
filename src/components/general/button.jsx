
const Button = (props) => {
  const primaryStyle = 'px-6 py-2 rounded-lg bg-primaryPink text-btnWhite text-sm font-iranYekan text-center';
  const classes = `${primaryStyle} ${props.className || ''}` 
  return <button className={classes} {...props}>{props.children}</button>;
};

export default Button;
