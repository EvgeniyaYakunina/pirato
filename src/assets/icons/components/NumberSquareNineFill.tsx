import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSquareNineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-square-nine-fill_svg__a)"><path fill="#000" d="M9.083 7.375a1.25 1.25 0 1 1-2.163-1.25 1.25 1.25 0 0 1 2.162 1.25zM14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1M9.125 4.801a2.25 2.25 0 1 0-1.01 4.195l-1.044 1.75a.5.5 0 0 0 .357.754.5.5 0 0 0 .503-.24L9.95 7.876a2.253 2.253 0 0 0-.824-3.074" /></g><defs><clipPath id="number-square-nine-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSquareNineFill);
const Memo = memo(ForwardRef);
export default Memo;