import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChartPieSliceFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chart-pie-slice-fill_svg__a)"><path fill="#000" d="M6.25 7.277a.5.5 0 0 0 .25-.433v-4.5a.5.5 0 0 0-.666-.469 6.504 6.504 0 0 0-4.226 7.313.5.5 0 0 0 .742.342zM5.5 3.1v3.454L2.508 8.282C2.5 8.187 2.5 8.092 2.5 8a5.51 5.51 0 0 1 3-4.899M14.5 8a6.5 6.5 0 0 1-12.105 3.294.5.5 0 0 1 .18-.688L7.5 7.74V2a.5.5 0 0 1 .5-.5 6.5 6.5 0 0 1 5.628 3.248l.018.034c.561.98.855 2.09.854 3.218" /></g><defs><clipPath id="chart-pie-slice-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChartPieSliceFill);
const Memo = memo(ForwardRef);
export default Memo;