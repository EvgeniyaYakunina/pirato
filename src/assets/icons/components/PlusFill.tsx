import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#plus-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1.5 6.5h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 1 1 0-1h3v-3a.5.5 0 1 1 1 0v3h3a.5.5 0 0 1 0 1" /></g><defs><clipPath id="plus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPlusFill);
const Memo = memo(ForwardRef);
export default Memo;