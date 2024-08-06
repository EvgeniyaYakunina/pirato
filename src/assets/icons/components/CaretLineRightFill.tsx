import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretLineRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-line-right-fill_svg__a)"><path fill="#000" d="M9.354 7.646a.5.5 0 0 1 0 .708l-5 5A.5.5 0 0 1 3.5 13V3a.5.5 0 0 1 .854-.354zM11.5 2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0V3a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="caret-line-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretLineRightFill);
const Memo = memo(ForwardRef);
export default Memo;