import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGoogleChromeLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#google-chrome-logo-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m0 1A5.5 5.5 0 0 1 12.608 5H8a3.005 3.005 0 0 0-2.85 2.063l-1.443-2.5A5.5 5.5 0 0 1 8 2.5M2.5 8a5.5 5.5 0 0 1 .598-2.491L5.402 9.5l.012.018a3 3 0 0 0 3.2 1.42l-1.444 2.5A5.51 5.51 0 0 1 2.5 8m5.793 5.492L10.598 9.5l.014-.026A2.99 2.99 0 0 0 10.237 6h2.888a5.5 5.5 0 0 1-4.83 7.492z" /></g><defs><clipPath id="google-chrome-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGoogleChromeLogoFill);
const Memo = memo(ForwardRef);
export default Memo;