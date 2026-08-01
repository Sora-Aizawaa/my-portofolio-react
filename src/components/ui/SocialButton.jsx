function SocialButton({ icon: Icon, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/5
      text-2xl
      transition-all
      hover:scale-110
      hover:border-cyan-400
      hover:text-cyan-400
      "
    >
      <Icon />
    </a>
  );
}

export default SocialButton;
