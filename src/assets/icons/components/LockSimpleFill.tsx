import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLockSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lock-simple-fill_svg__a)"><path fill="#000" d="M13 5h-2V3.5a3 3 0 0 0-6 0V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M6 3.5a2 2 0 1 1 4 0V5H6z" /></g><defs><clipPath id="lock-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLockSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;