import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSquareZeroFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-square-zero-fill_svg__a)"><path fill="#000" d="M9.75 8c0 .929-.369 2.5-1.75 2.5S6.25 8.929 6.25 8 6.619 5.5 8 5.5 9.75 7.071 9.75 8M14 3v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-3.25 5c0-.89-.223-1.72-.625-2.337C9.625 4.903 8.889 4.5 8 4.5c-.89 0-1.625.402-2.125 1.163C5.471 6.28 5.25 7.11 5.25 8c0 .89.223 1.72.625 2.337.5.76 1.234 1.163 2.125 1.163s1.625-.402 2.125-1.163c.402-.616.625-1.446.625-2.337" /></g><defs><clipPath id="number-square-zero-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSquareZeroFill);
const Memo = memo(ForwardRef);
export default Memo;