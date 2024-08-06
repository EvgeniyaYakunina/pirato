import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrayArrowDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tray-arrow-down-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5.646 7.146a.5.5 0 0 1 .708 0L7.5 8.293V4.5a.5.5 0 1 1 1 0v3.793l1.146-1.147a.5.5 0 1 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708M13 13H3v-2.5h1.793L6 11.707a1 1 0 0 0 .707.293h2.586a1 1 0 0 0 .707-.293l1.207-1.207H13z" /></g><defs><clipPath id="tray-arrow-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrayArrowDownFill);
const Memo = memo(ForwardRef);
export default Memo;