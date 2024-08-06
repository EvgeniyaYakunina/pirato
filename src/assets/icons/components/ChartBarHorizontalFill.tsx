import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChartBarHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chart-bar-horizontal-fill_svg__a)"><path fill="#000" d="M14.5 7v2a.5.5 0 0 1-.5.5H3.5v1H9a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H3.5v.5a.5.5 0 0 1-1 0v-11a.5.5 0 1 1 1 0V3H11a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-.5.5H3.5v1H14a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="chart-bar-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChartBarHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;