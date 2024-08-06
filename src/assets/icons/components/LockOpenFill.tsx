import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLockOpenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lock-open-fill_svg__a)"><path fill="#000" d="M13 5H6V3.5a2 2 0 0 1 2-2c.96 0 1.825.688 2.01 1.6a.5.5 0 0 0 .98-.2C10.707 1.51 9.45.5 8 .5a3.003 3.003 0 0 0-3 3V5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-5 5.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="lock-open-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLockOpenFill);
const Memo = memo(ForwardRef);
export default Memo;