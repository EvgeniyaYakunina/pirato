import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHandPalmFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hand-palm-fill_svg__a)"><path fill="#000" d="M13.5 6.5v3a5.5 5.5 0 0 1-11 0V4a1 1 0 0 1 2 0v3.5a.5.5 0 1 0 1 0V2a1 1 0 0 1 2 0v5a.5.5 0 1 0 1 0V3a1 1 0 0 1 2 0v5.042A3.005 3.005 0 0 0 8 11a.5.5 0 0 0 1 0 2 2 0 0 1 2-2 .5.5 0 0 0 .5-.5v-2a1 1 0 0 1 2 0" /></g><defs><clipPath id="hand-palm-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHandPalmFill);
const Memo = memo(ForwardRef);
export default Memo;