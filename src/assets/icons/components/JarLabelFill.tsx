import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgJarLabelFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#jar-label-fill_svg__a)"><path fill="#000" d="M11.5 3.05V2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v1.05a2.5 2.5 0 0 0-2 2.45v7A2.5 2.5 0 0 0 5 15h6a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-2-2.45m-1-.05h-1V2h1zm-3 0V2h1v1zm-1-1v1h-1V2zM5 4h6a1.5 1.5 0 0 1 1.5 1.5V6h-9v-.5A1.5 1.5 0 0 1 5 4m6 10H5a1.5 1.5 0 0 1-1.5-1.5V12h9v.5A1.5 1.5 0 0 1 11 14" /></g><defs><clipPath id="jar-label-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgJarLabelFill);
const Memo = memo(ForwardRef);
export default Memo;