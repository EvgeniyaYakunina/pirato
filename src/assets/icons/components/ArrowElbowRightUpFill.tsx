import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowElbowRightUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-elbow-right-up-fill_svg__a)"><path fill="#000" d="M13.962 6.191a.5.5 0 0 1-.462.309H11V12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1 0-1H10v-5H7.5a.5.5 0 0 1-.354-.854l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 .108.545" /></g><defs><clipPath id="arrow-elbow-right-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowElbowRightUpFill);
const Memo = memo(ForwardRef);
export default Memo;