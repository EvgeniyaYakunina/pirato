import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClockCountdownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#clock-countdown-fill_svg__a)"><path fill="#000" d="M14.5 8.541A6.508 6.508 0 1 1 7.459 1.5a.502.502 0 1 1 .082 1A5.507 5.507 0 1 0 13.5 8.459a.502.502 0 0 1 1 .082M10 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m2.25 1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m1.5 2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M7.5 8a.5.5 0 0 0 .5.5h3a.5.5 0 1 0 0-1H8.5V5a.5.5 0 0 0-1 0z" /></g><defs><clipPath id="clock-countdown-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgClockCountdownFill);
const Memo = memo(ForwardRef);
export default Memo;