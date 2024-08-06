import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDiscFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#disc-fill_svg__a)"><path fill="#000" d="M11.769 2.707a.5.5 0 0 0-.085-.06 6.49 6.49 0 1 0 .085.063zM7.999 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M13.5 8q0 .231-.019.459l-2.98-.527a2.5 2.5 0 0 0-.688-1.65l1.737-2.48A5.49 5.49 0 0 1 13.499 8" /></g><defs><clipPath id="disc-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDiscFill);
const Memo = memo(ForwardRef);
export default Memo;