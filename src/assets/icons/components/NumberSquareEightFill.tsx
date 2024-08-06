import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSquareEightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-square-eight-fill_svg__a)"><path fill="#000" d="M7 6.25a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-3.75 6.5a2.25 2.25 0 0 0-.887-1.788 2 2 0 1 0-2.726 0A2.25 2.25 0 1 0 10.25 9.5" /></g><defs><clipPath id="number-square-eight-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSquareEightFill);
const Memo = memo(ForwardRef);
export default Memo;