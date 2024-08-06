import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowBendLeftDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-bend-left-down-fill_svg__a)"><path fill="#000" d="M13 2a.5.5 0 0 1-.5.5A5.506 5.506 0 0 0 7 8v2.5h2.5a.5.5 0 0 1 .354.854l-3 3a.5.5 0 0 1-.708 0l-3-3A.5.5 0 0 1 3.5 10.5H6V8a6.507 6.507 0 0 1 6.5-6.5.5.5 0 0 1 .5.5" /></g><defs><clipPath id="arrow-bend-left-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowBendLeftDownFill);
const Memo = memo(ForwardRef);
export default Memo;