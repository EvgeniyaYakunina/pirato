import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLineDownLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-line-down-left-fill_svg__a)"><path fill="#000" d="M14.5 3a.5.5 0 0 1-.5.5H3a.5.5 0 1 1 0-1h11a.5.5 0 0 1 .5.5m-3.354 2.646L7.5 9.293 4.854 6.646A.5.5 0 0 0 4 7v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .354-.854L8.207 10l3.647-3.646a.5.5 0 0 0-.708-.708" /></g><defs><clipPath id="arrow-line-down-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowLineDownLeftFill);
const Memo = memo(ForwardRef);
export default Memo;