import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHeartBreakFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#heart-break-fill_svg__a)"><path fill="#000" d="M14.988 6.719c-.324 4.213-6.481 7.577-6.75 7.721a.5.5 0 0 1-.474 0C7.487 14.292 1 10.75 1 6.375a3.875 3.875 0 0 1 6.03-3.222.25.25 0 0 1 .037.386l-.835.836a.5.5 0 0 0 0 .707l2.034 2.033-1.328 1.322a.5.5 0 1 0 .706.707l1.68-1.679a.5.5 0 0 0 0-.707l-2.03-2.031 1.092-1.092A3.85 3.85 0 0 1 11.15 2.5c2.27.014 4.01 1.956 3.837 4.219" /></g><defs><clipPath id="heart-break-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHeartBreakFill);
const Memo = memo(ForwardRef);
export default Memo;