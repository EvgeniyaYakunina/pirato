import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowUDownRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-u-down-right-fill_svg__a)"><path fill="#000" d="m14.354 10.854-3 3a.501.501 0 0 1-.854-.354V11h-5a4 4 0 1 1 0-8H11a.5.5 0 0 1 0 1H5.5a3 3 0 1 0 0 6h5V7.5a.5.5 0 0 1 .854-.354l3 3a.503.503 0 0 1 0 .708" /></g><defs><clipPath id="arrow-u-down-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowUDownRightFill);
const Memo = memo(ForwardRef);
export default Memo;