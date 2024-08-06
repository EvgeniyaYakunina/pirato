import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTimerFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#timer-fill_svg__a)"><path fill="#000" d="M8 2.5a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6m2.854 3.854-2.5 2.5a.5.5 0 1 1-.708-.708l2.5-2.5a.5.5 0 1 1 .708.708M6 1a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3A.5.5 0 0 1 6 1" /></g><defs><clipPath id="timer-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTimerFill);
const Memo = memo(ForwardRef);
export default Memo;