import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAirplayFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#airplay-fill_svg__a)"><path fill="#000" d="M10.884 13.18a.5.5 0 0 1-.384.82h-5a.5.5 0 0 1-.384-.82l2.5-3a.5.5 0 0 1 .768 0zM13 2.5H3A1.5 1.5 0 0 0 1.5 4v7A1.5 1.5 0 0 0 3 12.5h1.264a.25.25 0 0 0 .192-.09l2.392-2.87a1.5 1.5 0 0 1 1.313-.532c.398.047.762.248 1.015.559l2.37 2.843a.25.25 0 0 0 .192.09H13a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 13 2.5" /></g><defs><clipPath id="airplay-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAirplayFill);
const Memo = memo(ForwardRef);
export default Memo;