import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSortAscendingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sort-ascending-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4.5 4.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 1 1 0-1m2.5 7H4.5a.5.5 0 0 1 0-1H7a.5.5 0 0 1 0 1m.5-3h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1m4.854 1.854-1.5 1.5a.503.503 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l.646.647V7.5a.5.5 0 0 1 1 0v2.793l.646-.647a.5.5 0 0 1 .708.708" /></g><defs><clipPath id="sort-ascending-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSortAscendingFill);
const Memo = memo(ForwardRef);
export default Memo;