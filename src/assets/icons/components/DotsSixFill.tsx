import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDotsSixFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dots-six-fill_svg__a)"><path fill="#000" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-9.75 7.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M8 10.5A.75.75 0 1 1 8 9a.75.75 0 0 1 0 1.5M8 7a.75.75 0 1 1 0-1.5A.75.75 0 0 1 8 7m3.75 3.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m0-3.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="dots-six-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDotsSixFill);
const Memo = memo(ForwardRef);
export default Memo;