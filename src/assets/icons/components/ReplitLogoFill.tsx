import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgReplitLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#replit-logo-fill_svg__a)"><path fill="#000" d="M4.5 10H9v3.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1M8 1.5H4.5a1 1 0 0 0-1 1V5a1 1 0 0 0 1 1H9V2.5a1 1 0 0 0-1-1M13.5 6H9v4h4.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1" /></g><defs><clipPath id="replit-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgReplitLogoFill);
const Memo = memo(ForwardRef);
export default Memo;