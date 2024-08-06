import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCallBellFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#call-bell-fill_svg__a)"><path fill="#000" d="M1 11a.5.5 0 0 1 .5-.5H2v-1a6.007 6.007 0 0 1 5.5-5.979V2.5h-1a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1h-1v1.021A6.01 6.01 0 0 1 14 9.5v1h.5a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 11m13.5 1.5h-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1" /></g><defs><clipPath id="call-bell-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCallBellFill);
const Memo = memo(ForwardRef);
export default Memo;