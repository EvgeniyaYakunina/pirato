import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowUUpRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-u-up-right-fill_svg__a)"><path fill="#000" d="M10.5 8.5V6h-5a3 3 0 1 0 0 6H11a.5.5 0 0 1 0 1H5.5a4 4 0 1 1 0-8h5V2.5a.5.5 0 0 1 .854-.354l3 3a.5.5 0 0 1 0 .708l-3 3A.5.5 0 0 1 10.5 8.5" /></g><defs><clipPath id="arrow-u-up-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowUUpRightFill);
const Memo = memo(ForwardRef);
export default Memo;