import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVisorFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#visor-fill_svg__a)"><path fill="#000" d="M11.44 3.5H4.5A4.5 4.5 0 0 0 .005 8.213c.106 2.293 1.985 4.174 4.278 4.282.99.045 2-.369 3.086-1.269a.99.99 0 0 1 1.265 0c.661.548 1.678 1.274 2.866 1.274A4.5 4.5 0 0 0 16 7.94c-.032-2.448-2.078-4.44-4.56-4.44m-.44 3H5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1" /></g><defs><clipPath id="visor-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVisorFill);
const Memo = memo(ForwardRef);
export default Memo;