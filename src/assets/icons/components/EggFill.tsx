import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEggFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#egg-fill_svg__a)"><path fill="#000" d="M13.5 9.5a5.5 5.5 0 0 1-11 0c0-1.923.669-4.029 1.834-5.777C5.47 2.018 6.84 1 8 1s2.53 1.018 3.666 2.723C12.831 5.47 13.5 7.577 13.5 9.5" /></g><defs><clipPath id="egg-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEggFill);
const Memo = memo(ForwardRef);
export default Memo;