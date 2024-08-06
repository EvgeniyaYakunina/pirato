import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-fill_svg__a)"><path fill="#000" d="M14.433 13.75A.5.5 0 0 1 14 14H2a.5.5 0 0 1-.433-.75c.952-1.646 2.42-2.826 4.131-3.385a4.5 4.5 0 1 1 4.604 0c1.712.56 3.179 1.74 4.13 3.385a.5.5 0 0 1 .001.5" /></g><defs><clipPath id="user-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserFill);
const Memo = memo(ForwardRef);
export default Memo;