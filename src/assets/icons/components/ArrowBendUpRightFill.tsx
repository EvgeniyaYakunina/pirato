import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowBendUpRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-bend-up-right-fill_svg__a)"><path fill="#000" d="m14.354 6.854-3 3A.5.5 0 0 1 10.5 9.5V7H8a5.506 5.506 0 0 0-5.5 5.5.5.5 0 0 1-1 0A6.507 6.507 0 0 1 8 6h2.5V3.5a.5.5 0 0 1 .854-.354l3 3a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="arrow-bend-up-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowBendUpRightFill);
const Memo = memo(ForwardRef);
export default Memo;