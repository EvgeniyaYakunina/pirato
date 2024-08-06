import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBowlingBallFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bowling-ball-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M8.25 8a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M9.5 5.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M10.75 9a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="bowling-ball-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBowlingBallFill);
const Memo = memo(ForwardRef);
export default Memo;