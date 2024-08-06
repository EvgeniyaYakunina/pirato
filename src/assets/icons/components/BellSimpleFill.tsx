import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBellSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bell-simple-fill_svg__a)"><path fill="#000" d="M10.5 14a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5m3.363-3.004C13.516 10.4 13 8.708 13 6.5a5 5 0 0 0-10 0c0 2.209-.516 3.899-.863 4.496A1 1 0 0 0 3 12.5h10a1 1 0 0 0 .863-1.504" /></g><defs><clipPath id="bell-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBellSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;