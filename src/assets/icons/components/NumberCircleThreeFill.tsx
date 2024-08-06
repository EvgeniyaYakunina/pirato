import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberCircleThreeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-circle-three-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m-.25 10.25a2.23 2.23 0 0 1-1.607-.676.5.5 0 1 1 .714-.699A1.249 1.249 0 1 0 7.75 8.25a.5.5 0 0 1-.41-.787l1.2-1.713H6.5a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .41.787L8.596 7.412a2.25 2.25 0 0 1-.847 4.338" /></g><defs><clipPath id="number-circle-three-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberCircleThreeFill);
const Memo = memo(ForwardRef);
export default Memo;