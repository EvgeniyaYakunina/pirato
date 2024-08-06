import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowDownLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-down-left-fill_svg__a)"><path fill="#000" d="M12.354 4.354 7.957 8.75l2.897 2.896a.501.501 0 0 1-.354.854H4a.5.5 0 0 1-.5-.5V5.5a.5.5 0 0 1 .854-.354L7.25 8.043l4.396-4.397a.501.501 0 0 1 .708.708" /></g><defs><clipPath id="arrow-down-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowDownLeftFill);
const Memo = memo(ForwardRef);
export default Memo;