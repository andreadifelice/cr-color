type FooterProps = {
  children?: React.ReactElement
}

const Footer = ({children}: FooterProps) => {

  return (
    <div className="flex items-center justify-center">
      {children}
      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span className="font-bold">CR color & design solution</span>
          <span> di </span>
          <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-black dark:text-white">
            <a
              aria-label="Logo"
              className="font-bold"
              href="https://www.instagram.com/aliimam.in/"
              target="_blank"
            >
              Renato Ciarallo {""}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
