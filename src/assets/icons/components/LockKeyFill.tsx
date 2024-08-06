import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLockKeyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lock-key-fill_svg__a)"><path fill="#000" d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M8.5 9.914V11.5a.5.5 0 0 1-1 0V9.914a1.5 1.5 0 1 1 1 0M10 5H6V3.5a2 2 0 1 1 4 0z" /></g><defs><clipPath id="lock-key-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLockKeyFill);
const Memo = memo(ForwardRef);
export default Memo;