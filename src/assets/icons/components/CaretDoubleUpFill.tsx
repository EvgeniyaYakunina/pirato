import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretDoubleUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-double-up-fill_svg__a)"><path fill="#000" d="M9.207 8H13a.5.5 0 0 0 .354-.854l-5-5a.5.5 0 0 0-.708 0l-5 5A.5.5 0 0 0 3 8h3.793l-4.147 4.146A.5.5 0 0 0 3 13h10a.5.5 0 0 0 .354-.854z" /></g><defs><clipPath id="caret-double-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretDoubleUpFill);
const Memo = memo(ForwardRef);
export default Memo;