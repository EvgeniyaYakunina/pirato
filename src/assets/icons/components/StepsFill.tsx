import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStepsFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#steps-fill_svg__a)"><path fill="#000" d="M15 3.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1 0-1h3V9.5A.5.5 0 0 1 4 9h3V6.5a.5.5 0 0 1 .5-.5h3V3.5A.5.5 0 0 1 11 3h3.5a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="steps-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStepsFill);
const Memo = memo(ForwardRef);
export default Memo;