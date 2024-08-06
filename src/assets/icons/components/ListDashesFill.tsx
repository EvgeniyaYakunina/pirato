import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgListDashesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#list-dashes-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-8.5 9.5H4a.5.5 0 0 1 0-1h.5a.5.5 0 0 1 0 1m0-3H4a.5.5 0 1 1 0-1h.5a.5.5 0 1 1 0 1m0-3H4a.5.5 0 1 1 0-1h.5a.5.5 0 1 1 0 1m7.5 6H6.5a.5.5 0 0 1 0-1H12a.5.5 0 0 1 0 1m0-3H6.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 0 1m0-3H6.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 0 1" /></g><defs><clipPath id="list-dashes-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgListDashesFill);
const Memo = memo(ForwardRef);
export default Memo;