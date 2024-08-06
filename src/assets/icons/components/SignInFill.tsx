import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSignInFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#sign-in-fill_svg__a)"><path fill="#000" d="m8.854 8.354-2.5 2.5A.5.5 0 0 1 5.5 10.5v-2h-4a.5.5 0 1 1 0-1h4v-2a.5.5 0 0 1 .854-.354l2.5 2.5a.5.5 0 0 1 0 .708M12.5 2h-4a.5.5 0 1 0 0 1H12v10H8.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="sign-in-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSignInFill);
const Memo = memo(ForwardRef);
export default Memo;