//Icons
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col h-full py-8 mt-8 border-t border-slate-700 ">
      <div className="flex justify-center items-center gap-2 opacity-70">
        <img src={Logo} className="h-4" title="Moovies" />
        <span>•</span>
        <a
          href="https://www.linkedin.com/in/brayanmelo/"
          target="_blank"
          className="text-xs"
        >
          <span className="font-semibold">Design by</span> Brayan Melo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
