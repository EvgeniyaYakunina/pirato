import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEscalatorDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#escalator-down-fill_svg__a)"><path fill="#000" d="M10.646 5.354a.5.5 0 0 1 .708-.708l.646.647V3a.5.5 0 0 1 1 0v2.293l.646-.647a.5.5 0 0 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0zM14 9h-2.281L5.868 2.66A.5.5 0 0 0 5.5 2.5H2a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1h2.281l5.852 6.34a.5.5 0 0 0 .367.16H14a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1" /></g><defs><clipPath id="escalator-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEscalatorDownFill);
const Memo = memo(ForwardRef);
export default Memo;