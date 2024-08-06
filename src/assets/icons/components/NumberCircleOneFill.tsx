import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberCircleOneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-circle-one-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m.75 9.5a.5.5 0 0 1-1 0V5.938l-.723.481a.5.5 0 1 1-.554-.832l1.5-1A.5.5 0 0 1 8.75 5z" /></g><defs><clipPath id="number-circle-one-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberCircleOneFill);
const Memo = memo(ForwardRef);
export default Memo;