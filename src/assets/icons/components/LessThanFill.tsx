import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLessThanFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#less-than-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.79 8.546a.497.497 0 0 1 .259.67.5.5 0 0 1-.678.238l-6.5-3a.5.5 0 0 1 0-.908l6.5-3a.5.5 0 0 1 .418.908L5.693 8z" /></g><defs><clipPath id="less-than-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLessThanFill);
const Memo = memo(ForwardRef);
export default Memo;