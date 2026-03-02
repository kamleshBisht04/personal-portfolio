const Button = ({ className = "", children, onClick, size = "default" }) => {
  const baseClasses = `relative overflow-hidden rounded-full  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90`;
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-[8px] text-md",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
