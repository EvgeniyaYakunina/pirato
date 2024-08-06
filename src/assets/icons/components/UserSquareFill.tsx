import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserSquareFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-square-fill_svg__a)"><path fill="#000" d="M10.75 7.5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-1 10V3H3v10h.23a5.04 5.04 0 0 1 2.026-2.68.25.25 0 0 1 .3.021 3.74 3.74 0 0 0 4.887 0 .25.25 0 0 1 .3-.02q.206.135.398.288A5.04 5.04 0 0 1 12.771 13z" /></g><defs><clipPath id="user-square-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserSquareFill);
const Memo = memo(ForwardRef);
export default Memo;