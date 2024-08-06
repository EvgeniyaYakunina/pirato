import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretLineUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-line-up-fill_svg__a)"><path fill="#000" d="M13.354 11.646A.5.5 0 0 1 13 12.5H3a.5.5 0 0 1-.354-.854l5-5a.5.5 0 0 1 .708 0zM3 5h10a.5.5 0 0 0 0-1H3a.5.5 0 0 0 0 1" /></g><defs><clipPath id="caret-line-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretLineUpFill);
const Memo = memo(ForwardRef);
export default Memo;