import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStackOverflowLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#stack-overflow-logo-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-4.571.929a.5.5 0 0 1 .707 0l2.828 2.829a.5.5 0 0 1-.707.706L8.43 3.636a.5.5 0 0 1 0-.707M6.26 6.173a.5.5 0 0 1 .653-.27l3.696 1.53a.5.5 0 1 1-.383.924l-3.695-1.53a.5.5 0 0 1-.27-.654M6 9.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1m6.5 2.5a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V9a.5.5 0 1 1 1 0v2.5h7V9a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="stack-overflow-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStackOverflowLogoFill);
const Memo = memo(ForwardRef);
export default Memo;