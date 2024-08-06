import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpinnerBallFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#spinner-ball-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.444 1.574c.196 2.158-.757 3.141-2.007 4.027-.14-1.53-.527-3.113-2.398-4.24a5.5 5.5 0 0 1 4.407.213zM2.511 8.346c1.771-1.25 3.098-.917 4.492-.274-1.253.887-2.429 2.013-2.47 4.194a5.5 5.5 0 0 1-2.022-3.92m8.532 4.233C9.077 11.67 8.7 10.356 8.56 8.83c.795.367 1.644.672 2.58.672.709 0 1.467-.175 2.29-.63a5.51 5.51 0 0 1-2.388 3.708" /></g><defs><clipPath id="spinner-ball-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSpinnerBallFill);
const Memo = memo(ForwardRef);
export default Memo;