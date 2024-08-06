import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClockCounterClockwiseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#clock-counter-clockwise-fill_svg__a)"><path fill="#000" d="M14 8a6 6 0 0 1-10.118 4.364.501.501 0 0 1 .687-.728 5 5 0 1 0-.105-7.171q-.328.334-.63.66l1.02 1.021A.5.5 0 0 1 4.5 7H2a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .854-.354l.771.773q.3-.327.629-.66A6 6 0 0 1 14 8M8 4.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .242.429l2.5 1.5a.5.5 0 1 0 .515-.858L8.5 7.717V5a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="clock-counter-clockwise-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgClockCounterClockwiseFill);
const Memo = memo(ForwardRef);
export default Memo;