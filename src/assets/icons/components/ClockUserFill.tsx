import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClockUserFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#clock-user-fill_svg__a)"><path fill="#000" d="M8.5 4.5v2.691l2.276-1.138a.5.5 0 1 1 .448.894l-3 1.5A.5.5 0 0 1 7.5 8V4.5a.5.5 0 0 1 1 0m-.5 9A5.5 5.5 0 1 1 13.5 8a.5.5 0 0 0 1 0A6.5 6.5 0 1 0 8 14.5a.5.5 0 0 0 0-1m5.414-1.086a2 2 0 1 0-2.828 0 2.5 2.5 0 0 0-1.07 1.461.5.5 0 0 0 .484.625h4a.5.5 0 0 0 .483-.629 2.5 2.5 0 0 0-1.07-1.457" /></g><defs><clipPath id="clock-user-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgClockUserFill);
const Memo = memo(ForwardRef);
export default Memo;