import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMemberOfFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#member-of-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 5.5a.5.5 0 0 1 0 1H5.043A3.004 3.004 0 0 0 8 11h3a.5.5 0 0 1 0 1H8a4 4 0 1 1 0-8h3a.5.5 0 0 1 0 1H8a3.004 3.004 0 0 0-2.957 2.5z" /></g><defs><clipPath id="member-of-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMemberOfFill);
const Memo = memo(ForwardRef);
export default Memo;