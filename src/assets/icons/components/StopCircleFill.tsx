import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStopCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#stop-circle-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2 8.25a.25.25 0 0 1-.25.25h-3.5A.25.25 0 0 1 6 9.75v-3.5A.25.25 0 0 1 6.25 6h3.5a.25.25 0 0 1 .25.25z" /></g><defs><clipPath id="stop-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStopCircleFill);
const Memo = memo(ForwardRef);
export default Memo;