import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgListStarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#list-star-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4 4.5h8a.5.5 0 0 1 0 1H4a.5.5 0 1 1 0-1m0 3h2a.5.5 0 1 1 0 1H4a.5.5 0 1 1 0-1m2.5 4H4a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 0 1m5.91-2.544-1.117.919.34 1.375a.25.25 0 0 1-.367.276L10 10.784l-1.264.744a.25.25 0 0 1-.37-.276l.34-1.375-1.115-.921a.25.25 0 0 1 .14-.442L9.204 8.4l.567-1.312a.25.25 0 0 1 .458 0l.567 1.312 1.473.114a.25.25 0 0 1 .14.442" /></g><defs><clipPath id="list-star-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgListStarFill);
const Memo = memo(ForwardRef);
export default Memo;