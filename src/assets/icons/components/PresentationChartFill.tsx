import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPresentationChartFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#presentation-chart-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-5v-1a.5.5 0 1 0-1 0v1h-5a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h2.46l-1.35 1.688a.5.5 0 1 0 .78.624L6.24 12h3.52l1.85 2.313a.5.5 0 1 0 .78-.626L11.04 12h2.46a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1M6.5 9a.5.5 0 1 1-1 0V7.5a.5.5 0 1 1 1 0zm2 0a.5.5 0 1 1-1 0V6.5a.5.5 0 1 1 1 0zm2 0a.5.5 0 0 1-1 0V5.5a.5.5 0 1 1 1 0z" /></g><defs><clipPath id="presentation-chart-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPresentationChartFill);
const Memo = memo(ForwardRef);
export default Memo;