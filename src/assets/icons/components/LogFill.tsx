import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLogFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#log-fill_svg__a)"><path fill="#000" d="M13.25 8.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.25 0c0 2.523-1.318 4.5-3 4.5h-9c-1.682 0-3-1.977-3-4.5S1.818 4 3.5 4h2.293l2.353-2.354A.5.5 0 0 1 8.5 1.5h2a.5.5 0 0 1 0 1H8.707L7.207 4H12.5c1.682 0 3 1.977 3 4.5m-9-.5a.5.5 0 1 0 0-1H2.079a.5.5 0 1 0 0 1zm3.182 2a.5.5 0 0 0-.5-.5H5a.5.5 0 1 0 0 1h4.182a.5.5 0 0 0 .5-.5M14.5 8.5c0-1.897-.916-3.5-2-3.5s-2 1.603-2 3.5.916 3.5 2 3.5 2-1.602 2-3.5" /></g><defs><clipPath id="log-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLogFill);
const Memo = memo(ForwardRef);
export default Memo;