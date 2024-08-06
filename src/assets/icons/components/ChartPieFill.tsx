import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChartPieFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chart-pie-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m0 1a5.5 5.5 0 0 1 4.492 2.33L8 7.422zm0 11a5.5 5.5 0 0 1-4.492-2.33l9.485-5.475A5.5 5.5 0 0 1 8 13.5" /></g><defs><clipPath id="chart-pie-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChartPieFill);
const Memo = memo(ForwardRef);
export default Memo;