import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBeanieFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#beanie-fill_svg__a)"><path fill="#000" d="M14 10.135V9a6.01 6.01 0 0 0-4.521-5.813 1.75 1.75 0 1 0-2.958 0A6.01 6.01 0 0 0 2 9v1.135a1 1 0 0 0-.5.865v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a1 1 0 0 0-.5-.865M7.5 11v2H5v-2zm1 0H11v2H8.5zM7.25 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M2.5 11H4v2H2.5zm11 2H12v-2h1.5z" /></g><defs><clipPath id="beanie-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBeanieFill);
const Memo = memo(ForwardRef);
export default Memo;