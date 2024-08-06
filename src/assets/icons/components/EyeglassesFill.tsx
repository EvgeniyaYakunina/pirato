import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEyeglassesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#eyeglasses-fill_svg__a)"><path fill="#000" d="M14.5 4.5v5.75a2.75 2.75 0 0 1-5.488.25H6.988a2.75 2.75 0 0 1-5.488-.25V4.5a2 2 0 0 1 2-2 .5.5 0 1 1 0 1 1 1 0 0 0-1 1v3.63A2.75 2.75 0 0 1 6.895 9.5h2.21A2.75 2.75 0 0 1 13.5 8.13V4.5a1 1 0 0 0-1-1 .5.5 0 0 1 0-1 2 2 0 0 1 2 2" /></g><defs><clipPath id="eyeglasses-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEyeglassesFill);
const Memo = memo(ForwardRef);
export default Memo;