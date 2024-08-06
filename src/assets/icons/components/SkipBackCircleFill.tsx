import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSkipBackCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#skip-back-circle-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.5 9a.5.5 0 0 1-.79.407L6.5 8.614V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 1 1 1 0v1.886l3.21-2.293a.5.5 0 0 1 .79.407z" /></g><defs><clipPath id="skip-back-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSkipBackCircleFill);
const Memo = memo(ForwardRef);
export default Memo;