import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShrimpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#shrimp-fill_svg__a)"><path fill="#000" d="M8.5 7.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m6.5-3.5a1.75 1.75 0 0 1-1.012 1.586A5.006 5.006 0 0 1 9 10H7a.75.75 0 1 0 0 1.5h3.5a.5.5 0 0 1 0 1h-3v1h2a.5.5 0 0 1 0 1H6a5 5 0 0 1 0-10h7.25a.75.75 0 1 0 0-1.5H8a1.5 1.5 0 0 1-1.5-1.5.5.5 0 1 1 1 0A.5.5 0 0 0 8 2h5.25A1.75 1.75 0 0 1 15 3.75m-9.642 7.637a.5.5 0 0 0-.698-.116l-.96.688a.5.5 0 0 0 .581.812l.96-.687a.5.5 0 0 0 .117-.697m-.094-2.226L2.847 8.063a.5.5 0 1 0-.414.91l2.417 1.099a.5.5 0 0 0 .414-.91M12.969 5.5H7.5V9H9a4.006 4.006 0 0 0 3.969-3.5" /></g><defs><clipPath id="shrimp-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgShrimpFill);
const Memo = memo(ForwardRef);
export default Memo;