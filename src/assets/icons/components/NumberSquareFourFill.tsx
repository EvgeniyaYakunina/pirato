import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSquareFourFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-square-four-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-3 8h-.5v1a.5.5 0 0 1-1 0v-1h-3a.5.5 0 0 1-.394-.807l3.5-4.5A.5.5 0 0 1 9.5 5v4h.5a.5.5 0 0 1 0 1M6.523 9 8.5 6.457V9z" /></g><defs><clipPath id="number-square-four-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSquareFourFill);
const Memo = memo(ForwardRef);
export default Memo;