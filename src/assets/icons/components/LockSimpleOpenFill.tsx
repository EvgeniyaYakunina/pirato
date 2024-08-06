import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLockSimpleOpenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lock-simple-open-fill_svg__a)"><path fill="#000" d="M14 6v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V3.5a3.003 3.003 0 0 1 3-3c1.45 0 2.707 1.01 2.99 2.4a.5.5 0 0 1-.98.2C9.825 2.186 8.96 1.5 8 1.5a2 2 0 0 0-2 2V5h7a1 1 0 0 1 1 1" /></g><defs><clipPath id="lock-simple-open-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLockSimpleOpenFill);
const Memo = memo(ForwardRef);
export default Memo;