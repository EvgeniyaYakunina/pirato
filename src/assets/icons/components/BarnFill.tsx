import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBarnFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#barn-fill_svg__a)"><path fill="#000" d="M15 12h-.5V8.16l.093.13a.5.5 0 1 0 .813-.58l-2.5-3.5a.5.5 0 0 0-.125-.122L8.562 1.173l-.006-.004a1 1 0 0 0-1.11 0l-.006.004-4.224 2.916a.5.5 0 0 0-.125.12l-2.5 3.5a.5.5 0 1 0 .812.582l.097-.13V12H1a.5.5 0 0 0 0 1h14a.5.5 0 1 0 0-1M7 5h2a.5.5 0 0 1 0 1H7a.5.5 0 0 1 0-1m3.29 2.5L8 9.136 5.71 7.5zm-5.79.364L7.14 9.75 4.5 11.636zM5.71 12 8 10.364 10.29 12zm5.79-.364L8.86 9.75l2.64-1.886z" /></g><defs><clipPath id="barn-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBarnFill);
const Memo = memo(ForwardRef);
export default Memo;