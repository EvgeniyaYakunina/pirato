import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRankingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#ranking-fill_svg__a)"><path fill="#000" d="M15 12.5h-.5V9a1 1 0 0 0-1-1H11V3.5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2H2.5a1 1 0 0 0-1 1v6H1a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1m-10 0H2.5v-6H5zm3.75-4a.5.5 0 1 1-1 0V6.694l-.092.03a.5.5 0 1 1-.316-.948l.75-.25A.5.5 0 0 1 8.75 6zm4.75 4H11V9h2.5z" /></g><defs><clipPath id="ranking-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRankingFill);
const Memo = memo(ForwardRef);
export default Memo;