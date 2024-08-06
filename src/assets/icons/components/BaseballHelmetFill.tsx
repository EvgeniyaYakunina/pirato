import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBaseballHelmetFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#baseball-helmet-fill_svg__a)"><path fill="#000" d="M15.5 7.5h-1.519A6.5 6.5 0 0 0 1 8v1.5A4.505 4.505 0 0 0 5.5 14H8a4.505 4.505 0 0 0 4.5-4.5v-1h3a.5.5 0 0 0 0-1m-10 3.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m6-1.75a3.503 3.503 0 0 1-3.154 3.482A4.5 4.5 0 0 0 10 9.5v-1h1.5z" /></g><defs><clipPath id="baseball-helmet-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBaseballHelmetFill);
const Memo = memo(ForwardRef);
export default Memo;