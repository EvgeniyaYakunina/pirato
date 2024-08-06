import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgQueueFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#queue-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4 4.5h8a.5.5 0 0 1 0 1H4a.5.5 0 1 1 0-1m2.5 7H4a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 0 1m0-3H4a.5.5 0 1 1 0-1h2.5a.5.5 0 1 1 0 1m5.778 1.416-3 2A.5.5 0 0 1 8.5 11.5v-4a.5.5 0 0 1 .777-.416l3 2a.5.5 0 0 1 0 .832" /></g><defs><clipPath id="queue-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgQueueFill);
const Memo = memo(ForwardRef);
export default Memo;