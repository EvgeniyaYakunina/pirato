import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#calendar-fill_svg__a)"><path fill="#000" d="M13 2h-1.5v-.5a.5.5 0 0 0-1 0V2h-5v-.5a.5.5 0 1 0-1 0V2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-6 9.5a.5.5 0 0 1-1 0V8.309l-.276.139a.5.5 0 0 1-.448-.896l1-.5A.5.5 0 0 1 7 7.5zm3.5-.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.4-.8l1.799-2.398a.5.5 0 1 0-.832-.552.5.5 0 1 1-.866-.5 1.5 1.5 0 1 1 2.496 1.653L9.5 11zM3 5V3h1.5v.5a.5.5 0 1 0 1 0V3h5v.5a.5.5 0 0 0 1 0V3H13v2z" /></g><defs><clipPath id="calendar-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCalendarFill);
const Memo = memo(ForwardRef);
export default Memo;