import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBellFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bell-fill_svg__a)"><path fill="#000" d="M13.863 10.996C13.516 10.4 13 8.708 13 6.5a5 5 0 0 0-10 0c0 2.209-.516 3.899-.863 4.496A1 1 0 0 0 3 12.5h2.55a2.5 2.5 0 0 0 4.9 0H13a1 1 0 0 0 .863-1.504M8 13.5a1.5 1.5 0 0 1-1.414-1h2.828A1.5 1.5 0 0 1 8 13.5" /></g><defs><clipPath id="bell-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBellFill);
const Memo = memo(ForwardRef);
export default Memo;