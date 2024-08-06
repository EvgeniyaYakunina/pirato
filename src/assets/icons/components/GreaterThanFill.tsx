import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGreaterThanFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#greater-than-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.29 6.454-6.5 3a.5.5 0 0 1-.42-.908L10.308 8 4.79 5.454a.5.5 0 1 1 .418-.908l6.5 3a.5.5 0 0 1 0 .908" /></g><defs><clipPath id="greater-than-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGreaterThanFill);
const Memo = memo(ForwardRef);
export default Memo;