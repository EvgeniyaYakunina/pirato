import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretDoubleRightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-double-right-fill_svg__a)"><path fill="#000" d="m13.854 7.646-5-5A.5.5 0 0 0 8 3v3.793L3.854 2.646A.5.5 0 0 0 3 3v10a.5.5 0 0 0 .854.354L8 9.207V13a.5.5 0 0 0 .854.354l5-5a.5.5 0 0 0 0-.708" /></g><defs><clipPath id="caret-double-right-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretDoubleRightFill);
const Memo = memo(ForwardRef);
export default Memo;