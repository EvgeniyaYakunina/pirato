import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBracketsSquareFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#brackets-square-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-7 8.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1H5v6zm5.5.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H11V5H9.5a.5.5 0 1 1 0-1h2a.5.5 0 0 1 .5.5z" /></g><defs><clipPath id="brackets-square-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBracketsSquareFill);
const Memo = memo(ForwardRef);
export default Memo;