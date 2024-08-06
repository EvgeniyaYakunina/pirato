import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChartDonutFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#chart-donut-fill_svg__a)"><path fill="#000" d="M7.5 10.121v4.084a.25.25 0 0 1-.279.25 6.52 6.52 0 0 1-5.25-4.031.25.25 0 0 1 .168-.334l3.944-1.059a.25.25 0 0 1 .271.104c.24.345.58.608.975.75a.25.25 0 0 1 .171.236M8.004 1.5A.5.5 0 0 0 7.5 2v3.5a.496.496 0 0 0 .492.5 2 2 0 0 1 .679 3.884.25.25 0 0 0-.171.237v4.084a.25.25 0 0 0 .278.25A6.5 6.5 0 0 0 8.004 1.5m-2 6.343a2 2 0 0 1 .26-.839V7a.5.5 0 0 0-.19-.687l-3.02-1.747a.5.5 0 0 0-.684.184 6.5 6.5 0 0 0-.808 4.168.25.25 0 0 0 .313.207l3.951-1.062a.25.25 0 0 0 .18-.22z" /></g><defs><clipPath id="chart-donut-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChartDonutFill);
const Memo = memo(ForwardRef);
export default Memo;