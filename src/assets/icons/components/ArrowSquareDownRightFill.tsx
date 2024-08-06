import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowSquareDownRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-square-down-right-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2.5 8a.5.5 0 0 1-.5.5H7a.5.5 0 0 1 0-1h1.793L5.646 6.354a.5.5 0 1 1 .708-.708L9.5 8.793V7a.5.5 0 1 1 1 0z" /></g><defs><clipPath id="arrow-square-down-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowSquareDownRightFill);
const Memo = memo(ForwardRef);
export default Memo;