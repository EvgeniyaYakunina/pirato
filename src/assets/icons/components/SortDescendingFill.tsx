import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSortDescendingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sort-descending-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4.5 4.5H7a.5.5 0 1 1 0 1H4.5a.5.5 0 1 1 0-1m0 3h3a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1m6 4h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1m1.854-5.146a.5.5 0 0 1-.708 0L11 5.707V8.5a.5.5 0 0 1-1 0V5.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708" /></g><defs><clipPath id="sort-descending-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSortDescendingFill);
const Memo = memo(ForwardRef);
export default Memo;