import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHeartFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#heart-fill_svg__a)"><path fill="#000" d="M15 6.375c0 4.375-6.487 7.916-6.763 8.063a.5.5 0 0 1-.474 0C7.487 14.29 1 10.75 1 6.374A3.88 3.88 0 0 1 4.875 2.5c1.29 0 2.42.555 3.125 1.493.704-.938 1.834-1.493 3.125-1.493A3.88 3.88 0 0 1 15 6.375" /></g><defs><clipPath id="heart-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHeartFill);
const Memo = memo(ForwardRef);
export default Memo;