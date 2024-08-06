import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowSquareInFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-square-in-fill_svg__a)"><path fill="#000" d="M8 8.5v4a.5.5 0 0 1-.854.354L5.5 11.207l-2.646 2.647a.5.5 0 0 1-.708-.708L4.793 10.5 3.146 8.854A.5.5 0 0 1 3.5 8h4a.5.5 0 0 1 .5.5M13 2H5a1 1 0 0 0-1 1v3a.5.5 0 1 0 1 0V3h8v8h-3a.5.5 0 0 0 0 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1" /></g><defs><clipPath id="arrow-square-in-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowSquareInFill);
const Memo = memo(ForwardRef);
export default Memo;