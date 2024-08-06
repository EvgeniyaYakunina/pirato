import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretLineDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-line-down-fill_svg__a)"><path fill="#000" d="M2.646 4.854A.5.5 0 0 1 3 4h10a.5.5 0 0 1 .354.854l-5 5a.5.5 0 0 1-.708 0zM13 11.5H3a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1" /></g><defs><clipPath id="caret-line-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretLineDownFill);
const Memo = memo(ForwardRef);
export default Memo;