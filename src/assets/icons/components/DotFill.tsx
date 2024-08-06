import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDotFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dot-fill_svg__a)"><path fill="#000" d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 3.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="dot-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDotFill);
const Memo = memo(ForwardRef);
export default Memo;