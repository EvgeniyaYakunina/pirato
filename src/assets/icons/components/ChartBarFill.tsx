import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChartBarFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chart-bar-fill_svg__a)"><path fill="#000" d="M14.5 13a.5.5 0 0 1-.5.5H2a.5.5 0 0 1 0-1h.5v-4A.5.5 0 0 1 3 8h1.5a.5.5 0 0 1 .5.5v4h1v-7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v7h1v-10a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 .5.5v10h.5a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="chart-bar-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChartBarFill);
const Memo = memo(ForwardRef);
export default Memo;