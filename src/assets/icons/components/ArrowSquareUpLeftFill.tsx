import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowSquareUpLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-square-up-left-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2.646 8.354a.503.503 0 0 1-.708 0L6.5 7.207V9a.5.5 0 1 1-1 0V6a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1H7.207l3.147 3.146a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="arrow-square-up-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowSquareUpLeftFill);
const Memo = memo(ForwardRef);
export default Memo;