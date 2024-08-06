import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStopFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#stop-fill_svg__a)"><path fill="#000" d="M13.5 3.5v9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1" /></g><defs><clipPath id="stop-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStopFill);
const Memo = memo(ForwardRef);
export default Memo;