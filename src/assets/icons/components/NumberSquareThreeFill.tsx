import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSquareThreeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-square-three-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-5.25 9.5a2.23 2.23 0 0 1-1.607-.676.5.5 0 1 1 .714-.699A1.25 1.25 0 1 0 7.75 8a.5.5 0 0 1-.41-.787L8.54 5.5H6.5a.5.5 0 1 1 0-1h3a.5.5 0 0 1 .41.787L8.596 7.162A2.25 2.25 0 0 1 7.75 11.5" /></g><defs><clipPath id="number-square-three-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSquareThreeFill);
const Memo = memo(ForwardRef);
export default Memo;