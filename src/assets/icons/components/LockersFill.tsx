import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLockersFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#lockers-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v11a.5.5 0 0 0 1 0v-1h4.5v1a.5.5 0 0 0 1 0v-1H13v1a.5.5 0 0 0 1 0V3a1 1 0 0 0-1-1M6 7H3.5a.5.5 0 1 1 0-1H6a.5.5 0 1 1 0 1m0-2H3.5a.5.5 0 1 1 0-1H6a.5.5 0 1 1 0 1m2.5 6.5a.5.5 0 0 1-1 0v-8a.5.5 0 1 1 1 0zm4-4.5H10a.5.5 0 1 1 0-1h2.5a.5.5 0 0 1 0 1m0-2H10a.5.5 0 1 1 0-1h2.5a.5.5 0 0 1 0 1" /></g><defs><clipPath id="lockers-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLockersFill);
const Memo = memo(ForwardRef);
export default Memo;