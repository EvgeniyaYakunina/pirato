import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretCircleDoubleDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-circle-double-down-fill_svg__a)"><path fill="#000" d="M3.401 3.402a6.5 6.5 0 1 0 9.197 0 6.51 6.51 0 0 0-9.197 0m6.246 5.245a.5.5 0 0 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.707L8 10.294zm0-3.5a.5.5 0 0 1 .707.707l-2 2a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 .707-.707L8 6.792z" /></g><defs><clipPath id="caret-circle-double-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretCircleDoubleDownFill);
const Memo = memo(ForwardRef);
export default Memo;