import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgParallelogramFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#parallelogram-fill_svg__a)"><path fill="#000" d="m15.411 3.91-4.05 9a1 1 0 0 1-.912.59H1.5a1 1 0 0 1-.91-1.41l4.05-9a1 1 0 0 1 .912-.59H14.5a1 1 0 0 1 .912 1.41" /></g><defs><clipPath id="parallelogram-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgParallelogramFill);
const Memo = memo(ForwardRef);
export default Memo;