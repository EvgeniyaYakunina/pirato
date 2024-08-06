import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextHThreeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-h-three-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-5 8a.5.5 0 0 1-1 0V8H4.5v2a.5.5 0 0 1-1 0V5a.5.5 0 1 1 1 0v2H7V5a.5.5 0 1 1 1 0zm2.5 1.5a2 2 0 0 1-1.334-.51.5.5 0 1 1 .668-.744A1 1 0 1 0 10.5 8.5a.5.5 0 0 1-.4-.8l.9-1.2H9.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .4.8l-1.044 1.393A2 2 0 0 1 10.5 11.5" /></g><defs><clipPath id="text-h-three-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextHThreeFill);
const Memo = memo(ForwardRef);
export default Memo;