import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendarXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#calendar-x-fill_svg__a)"><path fill="#000" d="M13 2h-1.5v-.5a.5.5 0 0 0-1 0V2h-5v-.5a.5.5 0 1 0-1 0V2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-3.146 8.646a.501.501 0 0 1-.708.708L8 10.207l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9.5 6.146 8.354a.5.5 0 1 1 .708-.708L8 8.793l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9.5zM13 5H3V3h1.5v.5a.5.5 0 1 0 1 0V3h5v.5a.5.5 0 0 0 1 0V3H13z" /></g><defs><clipPath id="calendar-x-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCalendarXFill);
const Memo = memo(ForwardRef);
export default Memo;