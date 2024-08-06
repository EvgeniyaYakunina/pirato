import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretCircleDoubleLeftFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-circle-double-left-fill_svg__a)"><path fill="#000" d="M12.598 3.401a6.5 6.5 0 1 0 0 9.197 6.51 6.51 0 0 0 0-9.197M7.353 9.647a.5.5 0 0 1-.707.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .707.707L5.706 8zm3.5 0a.499.499 0 0 1-.354.854.5.5 0 0 1-.353-.147l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .707.707L9.207 8z" /></g><defs><clipPath id="caret-circle-double-left-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretCircleDoubleLeftFill);
const Memo = memo(ForwardRef);
export default Memo;