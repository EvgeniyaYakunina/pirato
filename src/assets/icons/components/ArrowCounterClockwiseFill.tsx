import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowCounterClockwiseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-counter-clockwise-fill_svg__a)"><path fill="#000" d="M14 8a6 6 0 0 1-5.92 6H8a5.96 5.96 0 0 1-4.119-1.637.502.502 0 0 1 .523-.831.5.5 0 0 1 .165.104 5 5 0 1 0-.12-7.158l-.66.603 1.063 1.062A.5.5 0 0 1 4.5 7h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .854-.356l1.228 1.231.684-.625A6 6 0 0 1 14 8" /></g><defs><clipPath id="arrow-counter-clockwise-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowCounterClockwiseFill);
const Memo = memo(ForwardRef);
export default Memo;