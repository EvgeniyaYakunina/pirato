import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPauseCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pause-circle-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.51 6.51 0 0 0 8 1.5M7 10a.5.5 0 0 1-1 0V6a.5.5 0 1 1 1 0zm3 0a.5.5 0 0 1-1 0V6a.5.5 0 1 1 1 0z" /></g><defs><clipPath id="pause-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPauseCircleFill);
const Memo = memo(ForwardRef);
export default Memo;