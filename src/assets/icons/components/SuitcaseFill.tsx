import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSuitcaseFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#suitcase-fill_svg__a)"><path fill="#000" d="M13.5 3.5H11V3a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 5 3v.5H2.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M6 4.5h4v8H6zM6 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v.5H6z" /></g><defs><clipPath id="suitcase-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSuitcaseFill);
const Memo = memo(ForwardRef);
export default Memo;