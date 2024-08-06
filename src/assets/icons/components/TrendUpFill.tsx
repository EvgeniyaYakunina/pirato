import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrendUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#trend-up-fill_svg__a)"><path fill="#000" d="M15 3.5v4a.5.5 0 0 1-.854.354L12.5 6.207 8.854 9.854a.5.5 0 0 1-.708 0L6 7.707l-4.146 4.147a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0L8.5 8.793 11.793 5.5l-1.647-1.646A.5.5 0 0 1 10.5 3h4a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="trend-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrendUpFill);
const Memo = memo(ForwardRef);
export default Memo;