import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretCircleDoubleUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-circle-double-up-fill_svg__a)"><path fill="#000" d="M12.599 12.598a6.5 6.5 0 1 0-9.197 0 6.51 6.51 0 0 0 9.197 0M6.353 7.353a.5.5 0 0 1-.707-.708l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.708L8 5.705zm0 3.5a.5.5 0 0 1-.707-.708l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 1 1-.707.708L8 9.207z" /></g><defs><clipPath id="caret-circle-double-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretCircleDoubleUpFill);
const Memo = memo(ForwardRef);
export default Memo;