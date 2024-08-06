import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChartScatterFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chart-scatter-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0 3.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-2.5-1a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-1.5-2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M6.25 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m6.25 4h-9a.5.5 0 0 1-.5-.5v-7a.5.5 0 1 1 1 0V11h8.5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="chart-scatter-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChartScatterFill);
const Memo = memo(ForwardRef);
export default Memo;