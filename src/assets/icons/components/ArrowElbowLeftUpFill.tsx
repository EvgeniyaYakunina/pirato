import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowElbowLeftUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-elbow-left-up-fill_svg__a)"><path fill="#000" d="M15 12a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 12V6.5H2.5a.5.5 0 0 1-.354-.854l3-3a.5.5 0 0 1 .708 0l3 3A.5.5 0 0 1 8.5 6.5H6v5h8.5a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="arrow-elbow-left-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowElbowLeftUpFill);
const Memo = memo(ForwardRef);
export default Memo;