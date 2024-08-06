import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRssFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#rss-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M4.75 12a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m2.75 0a.5.5 0 0 1-.5-.5A2.5 2.5 0 0 0 4.5 9a.5.5 0 1 1 0-1A3.504 3.504 0 0 1 8 11.5a.5.5 0 0 1-.5.5m2 0a.5.5 0 0 1-.5-.5A4.505 4.505 0 0 0 4.5 7a.5.5 0 1 1 0-1 5.506 5.506 0 0 1 5.5 5.5.5.5 0 0 1-.5.5m2 0a.5.5 0 0 1-.5-.5A6.507 6.507 0 0 0 4.5 5a.5.5 0 1 1 0-1 7.51 7.51 0 0 1 7.5 7.5.5.5 0 0 1-.5.5" /></g><defs><clipPath id="rss-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgRssFill);
const Memo = memo(ForwardRef);
export default Memo;