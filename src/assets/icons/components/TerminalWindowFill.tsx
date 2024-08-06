import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTerminalWindowFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#terminal-window-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M7.813 8.39l-2.5 2a.5.5 0 1 1-.625-.78L6.699 8 4.688 6.39a.5.5 0 1 1 .625-.78l2.5 2a.5.5 0 0 1 0 .78M11 10.5H8.5a.5.5 0 0 1 0-1H11a.5.5 0 0 1 0 1" /></g><defs><clipPath id="terminal-window-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTerminalWindowFill);
const Memo = memo(ForwardRef);
export default Memo;