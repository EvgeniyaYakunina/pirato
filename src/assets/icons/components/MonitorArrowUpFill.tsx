import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMonitorArrowUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#monitor-arrow-up-fill_svg__a)"><path fill="#000" d="M10.5 14a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5m4-10v7a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 11V4A1.5 1.5 0 0 1 3 2.5h10A1.5 1.5 0 0 1 14.5 4M9.854 6.646l-1.5-1.5a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 1 0 .708.708l.646-.647V9.5a.5.5 0 1 0 1 0V6.707l.646.647a.5.5 0 1 0 .708-.708" /></g><defs><clipPath id="monitor-arrow-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMonitorArrowUpFill);
const Memo = memo(ForwardRef);
export default Memo;