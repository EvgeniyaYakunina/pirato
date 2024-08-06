import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBracketsAngleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#brackets-angle-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-7.062 8.75a.503.503 0 0 1-.872.5l-2-3.5a.5.5 0 0 1 0-.496l2-3.5a.502.502 0 1 1 .872.496L4.576 8zm6-3-2 3.5a.5.5 0 0 1-.87-.496l1.86-3.25L9.566 4.75a.502.502 0 1 1 .871-.5l2 3.5a.5.5 0 0 1 0 .5" /></g><defs><clipPath id="brackets-angle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBracketsAngleFill);
const Memo = memo(ForwardRef);
export default Memo;