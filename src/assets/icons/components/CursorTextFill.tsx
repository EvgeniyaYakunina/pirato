import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCursorTextFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cursor-text-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M9 7.5a.5.5 0 1 1 0 1h-.5V10a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1h-.5a2 2 0 0 1-1.5-.68 2 2 0 0 1-1.5.68H6a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1V8.5H7a.5.5 0 1 1 0-1h.5V6a1 1 0 0 0-1-1H6a.5.5 0 1 1 0-1h.5a2 2 0 0 1 1.5.68A2 2 0 0 1 9.5 4h.5a.5.5 0 0 1 0 1h-.5a1 1 0 0 0-1 1v1.5z" /></g><defs><clipPath id="cursor-text-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCursorTextFill);
const Memo = memo(ForwardRef);
export default Memo;