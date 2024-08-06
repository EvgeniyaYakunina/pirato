import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowElbowUpRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-elbow-up-right-fill_svg__a)"><path fill="#000" d="m13.854 5.354-3 3A.5.5 0 0 1 10 8V5.5H5V14a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5H10V2a.5.5 0 0 1 .854-.354l3 3a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="arrow-elbow-up-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowElbowUpRightFill);
const Memo = memo(ForwardRef);
export default Memo;