import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBoneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bone-fill_svg__a)"><path fill="#000" d="M14.445 6.732a2.244 2.244 0 0 1-2.887.425h-.006l-4.397 4.398v.005a2.25 2.25 0 1 1-4.148 1.432 2.25 2.25 0 1 1 1.432-4.148h.007l4.397-4.397v-.005a2.25 2.25 0 1 1 4.148-1.433 2.25 2.25 0 0 1 1.454 3.723" /></g><defs><clipPath id="bone-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBoneFill);
const Memo = memo(ForwardRef);
export default Memo;