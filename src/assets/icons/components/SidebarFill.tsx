import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSidebarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sidebar-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M4 9.5H3a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1m0-2H3a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1m0-2H3a.5.5 0 1 1 0-1h1a.5.5 0 1 1 0 1m9.5 7h-8v-9h8z" /></g><defs><clipPath id="sidebar-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSidebarFill);
const Memo = memo(ForwardRef);
export default Memo;