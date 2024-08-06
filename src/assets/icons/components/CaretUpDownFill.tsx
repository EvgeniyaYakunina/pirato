import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretUpDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-up-down-fill_svg__a)"><path fill="#000" d="M11.462 10.809a.5.5 0 0 1-.108.545l-3 3a.5.5 0 0 1-.708 0l-3-3A.5.5 0 0 1 5 10.5h6a.5.5 0 0 1 .462.309M5 5.499h6a.5.5 0 0 0 .354-.853l-3-3a.5.5 0 0 0-.708 0l-3 3A.5.5 0 0 0 5 5.5" /></g><defs><clipPath id="caret-up-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretUpDownFill);
const Memo = memo(ForwardRef);
export default Memo;