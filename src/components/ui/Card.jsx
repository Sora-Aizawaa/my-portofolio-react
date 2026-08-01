function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
