import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEqualsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#equals-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.5 8h-7a.5.5 0 1 1 0-1h7a.5.5 0 0 1 0 1m0-3h-7a.5.5 0 1 1 0-1h7a.5.5 0 0 1 0 1" /></g><defs><clipPath id="equals-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEqualsFill);
const Memo = memo(ForwardRef);
export default Memo;