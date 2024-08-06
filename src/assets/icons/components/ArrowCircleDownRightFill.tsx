import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowCircleDownRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-circle-down-right-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.5 8.5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1 0-1h1.793L5.646 6.354a.5.5 0 1 1 .708-.708L9.5 8.793V7a.5.5 0 1 1 1 0z" /></g><defs><clipPath id="arrow-circle-down-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowCircleDownRightFill);
const Memo = memo(ForwardRef);
export default Memo;