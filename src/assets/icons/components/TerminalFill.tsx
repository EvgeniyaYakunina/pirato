import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTerminalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#terminal-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-8.646 8.354a.5.5 0 0 1-.708-.708L6.293 8 4.146 5.854a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708zM12 11H8a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1" /></g><defs><clipPath id="terminal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTerminalFill);
const Memo = memo(ForwardRef);
export default Memo;