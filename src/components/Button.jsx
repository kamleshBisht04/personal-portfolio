const Button = ({ className = "", children, onClick, size = "default" }) => {
  const baseClasses = `relative overflow-hidden rounded-full  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 `;
  const sizeClasses = {
    sm: "px-8 py-2 text-sm h-10",
    md: "px-6 py-2 text-base h-12",
    lg: "px-8 py-4 text-lg h-12",
    default: "px-6 py-3 text-base h-12",
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
