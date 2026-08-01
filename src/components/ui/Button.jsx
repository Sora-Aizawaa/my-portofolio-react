function Button({
  children,
  variant = "primary",
  onClick,
  href,
  disabled = false,
}) {
  const styles = {
    primary: "bg-cyan-400 text-black hover:scale-105",

    outline:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black",
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`
          inline-flex
          items-center
          justify-center
          rounded-full
          px-6
          py-3
          font-semibold
          duration-300
          ${styles[variant]}
        `}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        rounded-full
        px-6
        py-3
        font-semibold
        duration-300
        ${styles[variant]}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
