import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowSquareDownLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-square-down-left-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2.646 4.354L7.207 9.5H9a.5.5 0 1 1 0 1H6a.5.5 0 0 1-.5-.5V7a.5.5 0 1 1 1 0v1.793l3.146-3.147a.5.5 0 1 1 .708.708" /></g><defs><clipPath id="arrow-square-down-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowSquareDownLeftFill);
const Memo = memo(ForwardRef);
export default Memo;