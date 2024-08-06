import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgListChecksFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#list-checks-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M7.354 9.354l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708m0-4-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708L5 6.293l1.646-1.647a.5.5 0 1 1 .708.708M12 10.5H9a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1m0-4H9a.5.5 0 1 1 0-1h3a.5.5 0 0 1 0 1" /></g><defs><clipPath id="list-checks-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgListChecksFill);
const Memo = memo(ForwardRef);
export default Memo;