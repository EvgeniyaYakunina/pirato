import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBezierCurveFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bezier-curve-fill_svg__a)"><path fill="#000" d="M13.813 9.025a6.02 6.02 0 0 0-2.5-3.525H15a.5.5 0 0 0 0-1H9.938a2 2 0 0 0-3.876 0H1a.5.5 0 1 0 0 1h3.688a6.02 6.02 0 0 0-2.5 3.525 2 2 0 1 0 2.25 2.475h7.125a2 2 0 1 0 2.25-2.475M2.5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2M8 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m5.5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2" /></g><defs><clipPath id="bezier-curve-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBezierCurveFill);
const Memo = memo(ForwardRef);
export default Memo;