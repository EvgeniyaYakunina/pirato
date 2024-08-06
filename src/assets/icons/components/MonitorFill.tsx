import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMonitorFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#monitor-fill_svg__a)"><path d="M13 2.5H3A1.5 1.5 0 0 0 1.5 4v7A1.5 1.5 0 0 0 3 12.5h10a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 13 2.5M10 13.5H6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1" /></g><defs><clipPath id="monitor-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMonitorFill);
const Memo = memo(ForwardRef);
export default Memo;