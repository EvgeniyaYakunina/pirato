import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowArcRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-arc-right-fill_svg__a)"><path fill="#000" d="M15 5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.354-.854l1.637-1.636A5.5 5.5 0 0 0 2.5 11.5a.5.5 0 0 1-1 0A6.5 6.5 0 0 1 12.491 6.8l1.655-1.655A.5.5 0 0 1 15 5.5" /></g><defs><clipPath id="arrow-arc-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowArcRightFill);
const Memo = memo(ForwardRef);
export default Memo;