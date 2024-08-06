import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEnvelopeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#envelope-fill_svg__a)"><path fill="#000" d="M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3M6.17 8 2.5 11.363V4.637zm.74.678.75.69a.5.5 0 0 0 .676 0l.75-.69L12.71 12H3.286zM9.83 8l3.67-3.364v6.728z" /></g><defs><clipPath id="envelope-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEnvelopeFill);
const Memo = memo(ForwardRef);
export default Memo;