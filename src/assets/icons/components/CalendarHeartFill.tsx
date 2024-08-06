import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendarHeartFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#calendar-heart-fill_svg__a)"><path fill="#000" d="M13 2h-1.5v-.5a.5.5 0 0 0-1 0V2h-5v-.5a.5.5 0 1 0-1 0V2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4.5 4v-.5a.5.5 0 1 1 1 0V4a.5.5 0 1 1-1 0m5.16 6.442a9 9 0 0 1-1.548 1.032.25.25 0 0 1-.224 0 9 9 0 0 1-1.548-1.032c-1.055-.88-1.59-1.785-1.59-2.692A1.75 1.75 0 0 1 8 6.85a1.75 1.75 0 0 1 3.25.9c0 .907-.535 1.813-1.59 2.692M11.5 4a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="calendar-heart-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCalendarHeartFill);
const Memo = memo(ForwardRef);
export default Memo;