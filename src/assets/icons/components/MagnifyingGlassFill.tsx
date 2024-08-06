import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMagnifyingGlassFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#magnifying-glass-fill_svg__a)"><path d="M10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m3.854 7.354a.5.5 0 0 1-.708 0l-3.129-3.13a5.5 5.5 0 1 1 .708-.707l3.129 3.13a.5.5 0 0 1 0 .707M7 11.5a4.5 4.5 0 1 0 0-9.001 4.5 4.5 0 0 0 0 9" /><circle cx={7} cy={7} r={5} /></g><defs><clipPath id="magnifying-glass-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMagnifyingGlassFill);
const Memo = memo(ForwardRef);
export default Memo;