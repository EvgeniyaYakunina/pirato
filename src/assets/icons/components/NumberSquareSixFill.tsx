import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSquareSixFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-square-six-fill_svg__a)"><path fill="#000" d="M9.25 9.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-3.75 6.25A2.25 2.25 0 0 0 8 7h-.114L8.93 5.256a.5.5 0 1 0-.858-.512L6.04 8.145A2.25 2.25 0 1 0 10.25 9.25" /></g><defs><clipPath id="number-square-six-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSquareSixFill);
const Memo = memo(ForwardRef);
export default Memo;