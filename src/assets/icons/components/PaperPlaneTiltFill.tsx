import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaperPlaneTiltFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paper-plane-tilt-fill_svg__a)"><path fill="#000" d="M14.462 2.771v.01l-3.637 11.996a.99.99 0 0 1-.961.723.99.99 0 0 1-.902-.572L6.687 10.26a.25.25 0 0 1 .049-.286l3.62-3.62a.5.5 0 0 0-.707-.707l-3.622 3.62a.25.25 0 0 1-.286.048L1.067 7.04a1 1 0 0 1 .156-1.863L13.22 1.54h.01a1 1 0 0 1 1.233 1.231" /></g><defs><clipPath id="paper-plane-tilt-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaperPlaneTiltFill);
const Memo = memo(ForwardRef);
export default Memo;