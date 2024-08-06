import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDiamondFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#diamond-fill_svg__a)"><path fill="#000" d="M15 8a1 1 0 0 1-.292.705l-6.003 6.004a1 1 0 0 1-1.41 0l-6-6.004a1 1 0 0 1 0-1.41l6.003-6.004a1 1 0 0 1 1.41 0l6.003 6.004A1 1 0 0 1 15 8" /></g><defs><clipPath id="diamond-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDiamondFill);
const Memo = memo(ForwardRef);
export default Memo;