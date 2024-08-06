import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCircuitryFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#circuitry-fill_svg__a)"><path fill="#000" d="m5.5 6.957 3 3v3.793a.25.25 0 0 1-.25.25H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1.25a.25.25 0 0 1 .25.25v7.336a1.5 1.5 0 1 0 1 0zM5 11.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m6.5-5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M13 2H9.75a.25.25 0 0 0-.25.25v2.043l.854.854a1.5 1.5 0 1 1-.707.707l-1-1A.5.5 0 0 1 8.5 4.5V2.25A.25.25 0 0 0 8.25 2h-2.5a.25.25 0 0 0-.25.25v3.293l3.854 3.853a.5.5 0 0 1 .146.354v4a.25.25 0 0 0 .25.25H13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1" /></g><defs><clipPath id="circuitry-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCircuitryFill);
const Memo = memo(ForwardRef);
export default Memo;