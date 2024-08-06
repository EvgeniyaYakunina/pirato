import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowCircleDownLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-circle-down-left-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.354 4.854L7.207 9.5H9a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5V7a.5.5 0 1 1 1 0v1.793l3.146-3.147a.5.5 0 0 1 .708.708" /></g><defs><clipPath id="arrow-circle-down-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowCircleDownLeftFill);
const Memo = memo(ForwardRef);
export default Memo;