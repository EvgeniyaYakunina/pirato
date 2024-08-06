import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgIntersectFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#intersect-fill_svg__a)"><path fill="#000" d="M10.914 5.086a5 5 0 1 0-5.828 5.829 5 5 0 1 0 5.828-5.83M2 6a4 4 0 0 1 7.875-1 5.005 5.005 0 0 0-4.872 4.875A4.01 4.01 0 0 1 2 6m8 8a4.01 4.01 0 0 1-3.875-3A5.005 5.005 0 0 0 11 6.125 4 4 0 0 1 10 14" /></g><defs><clipPath id="intersect-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgIntersectFill);
const Memo = memo(ForwardRef);
export default Memo;