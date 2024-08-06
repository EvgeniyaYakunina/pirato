import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSlidersHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sliders-horizontal-fill_svg__a)"><path fill="#000" d="M2 5a.5.5 0 0 1 .5-.5h2.323a1.75 1.75 0 0 1 3.354 0H13.5a.5.5 0 0 1 0 1H8.177a1.75 1.75 0 0 1-3.354 0H2.5A.5.5 0 0 1 2 5m11.5 5.5h-1.323a1.75 1.75 0 0 0-3.354 0H2.5a.5.5 0 0 0 0 1h6.323a1.75 1.75 0 0 0 3.354 0H13.5a.5.5 0 0 0 0-1" /></g><defs><clipPath id="sliders-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSlidersHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;