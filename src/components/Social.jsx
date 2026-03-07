import { socialLinks } from "@/constant/const";

const Social = () => {
  return (
    <>
      {socialLinks.map((social, index) => (
        <a
          className="glass hover:bg-primary/10 hover:text-primary rounded-full p-2  transition-all duration-300"
          key={index}
          href={social.href}
          target="_blank"
        >
          {<social.icon className="h-4.5 w-4.5" />}
        </a>
      ))}
    </>
  );
};

export default Social;
