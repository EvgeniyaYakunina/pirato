import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgListPlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#list-plus-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4 4.5h8a.5.5 0 0 1 0 1H4a.5.5 0 1 1 0-1m3.5 7H4a.5.5 0 0 1 0-1h3.5a.5.5 0 0 1 0 1m1-3H4a.5.5 0 1 1 0-1h4.5a.5.5 0 1 1 0 1m4 2h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0v1h1a.5.5 0 0 1 0 1" /></g><defs><clipPath id="list-plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgListPlusFill);
const Memo = memo(ForwardRef);
export default Memo;