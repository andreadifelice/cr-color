import { DIcons } from "dicons";
//import {Link} from 'react-router'
//import { useTheme } from "next-themes";

/* function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
} */

type FooterProps = {
  children?: React.ReactElement
}

const Footer = ({children}: FooterProps) => {
  //const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      {children}
      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <DIcons.Heart className="text-red-600 mx-1 h-4 w-4 animate-pulse" />
          <span> by </span>
          <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-black dark:text-white">
            <a
              aria-label="Logo"
              className="font-bold"
              href="https://www.instagram.com/aliimam.in/"
              target="_blank"
            >
              Ali Imam {""}
            </a>
          </span>
          -
          <span className="hover:text-ali dark:hover:text-red-600 cursor-pointer text-slate-600 dark:text-slate-400">
            <a aria-label="Logo" className="" href="/">
              Designali
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
