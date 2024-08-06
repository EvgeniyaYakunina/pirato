import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSquareFiveFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-square-five-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M7.75 7a2.25 2.25 0 1 1 0 4.5 2.22 2.22 0 0 1-1.607-.65.5.5 0 1 1 .714-.7 1.23 1.23 0 0 0 .893.35 1.25 1.25 0 0 0 0-2.5 1.23 1.23 0 0 0-.893.35.5.5 0 0 1-.85-.432l.5-3A.5.5 0 0 1 7 4.5h2.5a.5.5 0 1 1 0 1H7.424l-.262 1.571q.29-.07.588-.071" /></g><defs><clipPath id="number-square-five-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSquareFiveFill);
const Memo = memo(ForwardRef);
export default Memo;