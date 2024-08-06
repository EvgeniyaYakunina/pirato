import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGasCanFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gas-can-fill_svg__a)"><path fill="#000" d="M12.5 1.5H7.707A1 1 0 0 0 7 1.793l-.646.645-.647-.645a1 1 0 0 0-1.414 0l-1.5 1.5a1 1 0 0 0 0 1.414l.645.647L2.793 6a1 1 0 0 0-.293.707V13.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M3.5 4 5 2.5l.646.646-1.5 1.5zm7.8 7.6a.5.5 0 0 1-.6.8L8 10.375 5.3 12.4a.5.5 0 0 1-.6-.8l2.467-1.85L4.7 7.9a.5.5 0 0 1 .6-.8L8 9.125 10.7 7.1a.5.5 0 1 1 .6.8L8.833 9.75zM11 4.5H8.5a.5.5 0 0 1 0-1H11a.5.5 0 0 1 0 1" /></g><defs><clipPath id="gas-can-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGasCanFill);
const Memo = memo(ForwardRef);
export default Memo;