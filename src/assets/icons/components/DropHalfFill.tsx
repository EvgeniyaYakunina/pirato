import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDropHalfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#drop-half-fill_svg__a)"><path fill="#000" d="M10.875 2.984A16 16 0 0 0 8.285.59a.5.5 0 0 0-.574 0c-.948.7-1.816 1.503-2.586 2.394C3.407 4.957 2.5 7.037 2.5 9a5.5 5.5 0 1 0 11 0c0-1.963-.907-4.043-2.625-6.016M3.5 9c0-3.577 3.467-6.563 4.5-7.375V13.5A4.505 4.505 0 0 1 3.5 9" /></g><defs><clipPath id="drop-half-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDropHalfFill);
const Memo = memo(ForwardRef);
export default Memo;