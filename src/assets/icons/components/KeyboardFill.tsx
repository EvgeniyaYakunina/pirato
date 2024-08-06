import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyboardFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#keyboard-fill_svg__a)"><path fill="#000" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M4 10.5H3a.5.5 0 0 1 0-1h1a.5.5 0 1 1 0 1m6 0H6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1m3 0h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1m0-2H3a.5.5 0 1 1 0-1h10a.5.5 0 0 1 0 1m0-2H3a.5.5 0 1 1 0-1h10a.5.5 0 0 1 0 1" /></g><defs><clipPath id="keyboard-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgKeyboardFill);
const Memo = memo(ForwardRef);
export default Memo;