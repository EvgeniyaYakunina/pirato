import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgListHeartFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#list-heart-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-6.5 9.5H4a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 0 1M3.5 8a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1H4a.5.5 0 0 1-.5-.5m6.612 3.599a.25.25 0 0 1-.224 0C9.791 11.55 7.5 10.386 7.5 8.75a1.375 1.375 0 0 1 2.5-.79 1.375 1.375 0 0 1 2.5.79c0 1.636-2.29 2.8-2.388 2.849M12 5.5H4a.5.5 0 1 1 0-1h8a.5.5 0 0 1 0 1" /></g><defs><clipPath id="list-heart-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgListHeartFill);
const Memo = memo(ForwardRef);
export default Memo;