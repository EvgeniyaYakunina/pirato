import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowBendRightDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-bend-right-down-fill_svg__a)"><path fill="#000" d="m12.854 11.354-3 3a.5.5 0 0 1-.708 0l-3-3A.5.5 0 0 1 6.5 10.5H9V8a5.506 5.506 0 0 0-5.5-5.5.5.5 0 1 1 0-1A6.507 6.507 0 0 1 10 8v2.5h2.5a.5.5 0 0 1 .354.854" /></g><defs><clipPath id="arrow-bend-right-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowBendRightDownFill);
const Memo = memo(ForwardRef);
export default Memo;