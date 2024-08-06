import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChartLineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chart-line-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1 8.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5v-7a.5.5 0 1 1 1 0v3.932l2.18-1.816a.5.5 0 0 1 .598-.032l2.687 1.793 2.713-2.261a.5.5 0 0 1 .64.768l-3 2.5a.5.5 0 0 1-.597.032L6.533 7.623 4 9.734V11z" /></g><defs><clipPath id="chart-line-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChartLineFill);
const Memo = memo(ForwardRef);
export default Memo;