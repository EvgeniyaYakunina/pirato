import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrayFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tray-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m0 11H3v-2.5h1.793L6 11.707a1 1 0 0 0 .707.293h2.586a1 1 0 0 0 .707-.293l1.207-1.207H13z" /></g><defs><clipPath id="tray-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrayFill);
const Memo = memo(ForwardRef);
export default Memo;