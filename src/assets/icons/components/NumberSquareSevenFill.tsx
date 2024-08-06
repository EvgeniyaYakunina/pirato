import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSquareSevenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-square-seven-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M9.97 5.67l-2 5.5a.5.5 0 0 1-.94-.34L8.786 6H6.5a.5.5 0 1 1 0-1h3a.5.5 0 0 1 .47.67" /></g><defs><clipPath id="number-square-seven-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSquareSevenFill);
const Memo = memo(ForwardRef);
export default Memo;