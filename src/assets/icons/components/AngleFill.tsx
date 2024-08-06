import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAngleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#angle-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M7 5.5a4.004 4.004 0 0 1 4 4 .5.5 0 0 1-1 0 3.003 3.003 0 0 0-3-3 .5.5 0 1 1 0-1m5.5 6.5H5a.5.5 0 0 1-.5-.5v-5h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 1 1 1 0V11h7a.5.5 0 0 1 0 1" /></g><defs><clipPath id="angle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAngleFill);
const Memo = memo(ForwardRef);
export default Memo;