import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLineUpRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-line-up-right-fill_svg__a)"><path fill="#000" d="M14 13.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5M5 11a.5.5 0 0 0 .354-.146L9 7.207l2.646 2.647A.5.5 0 0 0 12.5 9.5v-6A.5.5 0 0 0 12 3H6a.5.5 0 0 0-.354.854L8.293 6.5l-3.647 3.646A.5.5 0 0 0 5 11" /></g><defs><clipPath id="arrow-line-up-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowLineUpRightFill);
const Memo = memo(ForwardRef);
export default Memo;