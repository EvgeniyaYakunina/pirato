import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberCircleSixFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-circle-six-fill_svg__a)"><path fill="#000" d="M9.25 9.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M14.5 8A6.5 6.5 0 1 1 8 1.5 6.507 6.507 0 0 1 14.5 8m-4.25 1.25A2.25 2.25 0 0 0 8 7h-.114L8.93 5.256a.5.5 0 0 0-.858-.512L6.04 8.145A2.25 2.25 0 1 0 10.25 9.25" /></g><defs><clipPath id="number-circle-six-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberCircleSixFill);
const Memo = memo(ForwardRef);
export default Memo;