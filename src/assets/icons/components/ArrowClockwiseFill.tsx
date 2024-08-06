import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowClockwiseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-clockwise-fill_svg__a)"><path fill="#000" d="M15 3.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.354-.854l1.063-1.062-.66-.603-.015-.015a5 5 0 1 0-.105 7.173.5.5 0 1 1 .688.727A5.97 5.97 0 0 1 8 14h-.083a6 6 0 1 1 4.317-10.25l.683.625 1.23-1.231A.5.5 0 0 1 15 3.5" /></g><defs><clipPath id="arrow-clockwise-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowClockwiseFill);
const Memo = memo(ForwardRef);
export default Memo;