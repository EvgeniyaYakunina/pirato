import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlaceholderFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#placeholder-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.293 9.707a.5.5 0 0 1-.707 0L4.293 5A.5.5 0 0 1 5 4.293L11.707 11a.5.5 0 0 1 0 .707" /></g><defs><clipPath id="placeholder-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPlaceholderFill);
const Memo = memo(ForwardRef);
export default Memo;