import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendarMinusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#calendar-minus-fill_svg__a)"><path fill="#000" d="M13 2h-1.5v-.5a.5.5 0 0 0-1 0V2h-5v-.5a.5.5 0 1 0-1 0V2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-3.5 8h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1M13 5H3V3h1.5v.5a.5.5 0 1 0 1 0V3h5v.5a.5.5 0 0 0 1 0V3H13z" /></g><defs><clipPath id="calendar-minus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCalendarMinusFill);
const Memo = memo(ForwardRef);
export default Memo;