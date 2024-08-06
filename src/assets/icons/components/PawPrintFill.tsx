import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPawPrintFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paw-print-fill_svg__a)"><path fill="#000" d="M15 6.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m-10.5 0a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M5.75 5.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m4.5 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m1.445 3.804a2.2 2.2 0 0 1-1.054-1.322 2.75 2.75 0 0 0-5.282 0 2.2 2.2 0 0 1-1.046 1.32 2.5 2.5 0 0 0 2.157 4.502 4 4 0 0 1 3.054 0 2.5 2.5 0 0 0 2.171-4.5" /></g><defs><clipPath id="paw-print-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPawPrintFill);
const Memo = memo(ForwardRef);
export default Memo;