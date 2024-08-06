import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSubtractSquareFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#subtract-square-fill_svg__a)"><path fill="#000" d="M13.5 5.5h-3v-3A.5.5 0 0 0 10 2H2.5a.5.5 0 0 0-.5.5V10a.5.5 0 0 0 .5.5h3v3a.5.5 0 0 0 .5.5h7.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5M3 3h6.5v6.5H3z" /></g><defs><clipPath id="subtract-square-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSubtractSquareFill);
const Memo = memo(ForwardRef);
export default Memo;