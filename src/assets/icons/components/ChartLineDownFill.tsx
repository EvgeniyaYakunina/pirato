import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChartLineDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chart-line-down-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1 9.5h-9a.5.5 0 0 1-.5-.5v-7a.5.5 0 1 1 1 0v1.293l2 2 2.146-2.147a.5.5 0 0 1 .708 0L11 7.793V6.5a.5.5 0 0 1 1 0V9a.5.5 0 0 1-.5.5H9a.5.5 0 1 1 0-1h1.293L8.5 6.707 6.354 8.854a.5.5 0 0 1-.708 0L4 7.207V11h8.5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="chart-line-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChartLineDownFill);
const Memo = memo(ForwardRef);
export default Memo;