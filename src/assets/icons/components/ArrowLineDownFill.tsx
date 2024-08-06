import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLineDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-line-down-fill_svg__a)"><path fill="#000" d="M3.146 7.354A.5.5 0 0 1 3.5 6.5h4V2a.5.5 0 1 1 1 0v4.5h4a.5.5 0 0 1 .354.854l-4.5 4.5a.5.5 0 0 1-.708 0zM13.5 13h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1" /></g><defs><clipPath id="arrow-line-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowLineDownFill);
const Memo = memo(ForwardRef);
export default Memo;