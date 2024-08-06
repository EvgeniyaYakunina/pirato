import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowBendLeftUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-bend-left-up-fill_svg__a)"><path fill="#000" d="M13 14a.5.5 0 0 1-.5.5A6.507 6.507 0 0 1 6 8V5.5H3.5a.5.5 0 0 1-.354-.854l3-3a.5.5 0 0 1 .708 0l3 3A.5.5 0 0 1 9.5 5.5H7V8a5.506 5.506 0 0 0 5.5 5.5.5.5 0 0 1 .5.5" /></g><defs><clipPath id="arrow-bend-left-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowBendLeftUpFill);
const Memo = memo(ForwardRef);
export default Memo;