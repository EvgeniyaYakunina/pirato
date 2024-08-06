import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCaretDoubleDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#caret-double-down-fill_svg__a)"><path fill="#000" d="M13 8H9.207l4.147-4.146A.5.5 0 0 0 13 3H3a.5.5 0 0 0-.354.854L6.793 8H3a.5.5 0 0 0-.354.854l5 5a.5.5 0 0 0 .708 0l5-5A.5.5 0 0 0 13 8" /></g><defs><clipPath id="caret-double-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCaretDoubleDownFill);
const Memo = memo(ForwardRef);
export default Memo;