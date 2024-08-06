import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEscalatorUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#escalator-up-fill_svg__a)"><path fill="#000" d="M15 3.5V6a1 1 0 0 1-1 1h-2.281l-5.851 6.34a.5.5 0 0 1-.368.16H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h2.281l5.852-6.34a.5.5 0 0 1 .367-.16H14a1 1 0 0 1 1 1m-2.146 5.646a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 0 0 .708.708l.646-.647V13a.5.5 0 0 0 1 0v-2.293l.646.647a.501.501 0 0 0 .708-.708z" /></g><defs><clipPath id="escalator-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEscalatorUpFill);
const Memo = memo(ForwardRef);
export default Memo;