import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTableFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#table-fill_svg__a)"><path fill="#000" d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3M2.5 7H5v2H2.5zM6 7h7.5v2H6zm-3.5 3H5v2H2.5zm11 2H6v-2h7.5z" /></g><defs><clipPath id="table-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTableFill);
const Memo = memo(ForwardRef);
export default Memo;