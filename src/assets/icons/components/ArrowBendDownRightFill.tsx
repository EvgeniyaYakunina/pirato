import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowBendDownRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-bend-down-right-fill_svg__a)"><path fill="#000" d="m14.354 9.854-3 3a.501.501 0 0 1-.854-.354V10H8a6.507 6.507 0 0 1-6.5-6.5.5.5 0 1 1 1 0A5.506 5.506 0 0 0 8 9h2.5V6.5a.5.5 0 0 1 .854-.354l3 3a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="arrow-bend-down-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowBendDownRightFill);
const Memo = memo(ForwardRef);
export default Memo;