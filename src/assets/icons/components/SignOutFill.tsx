import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSignOutFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sign-out-fill_svg__a)"><path fill="#000" d="M7.5 13.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-11A.5.5 0 0 1 3 2h4a.5.5 0 1 1 0 1H3.5v10H7a.5.5 0 0 1 .5.5m6.854-5.854-2.5-2.5A.5.5 0 0 0 11 5.5v2H7a.5.5 0 1 0 0 1h4v2a.5.5 0 0 0 .854.354l2.5-2.5a.5.5 0 0 0 0-.708" /></g><defs><clipPath id="sign-out-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSignOutFill);
const Memo = memo(ForwardRef);
export default Memo;