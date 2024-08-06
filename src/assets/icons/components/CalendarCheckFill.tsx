import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendarCheckFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#calendar-check-fill_svg__a)"><path fill="#000" d="M13 2h-1.5v-.5a.5.5 0 0 0-1 0V2h-5v-.5a.5.5 0 1 0-1 0V2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2.396 6.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708l1.146 1.147 2.646-2.647a.5.5 0 1 1 .708.708M3 5V3h1.5v.5a.5.5 0 1 0 1 0V3h5v.5a.5.5 0 0 0 1 0V3H13v2z" /></g><defs><clipPath id="calendar-check-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCalendarCheckFill);
const Memo = memo(ForwardRef);
export default Memo;