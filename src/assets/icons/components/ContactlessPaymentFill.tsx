import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgContactlessPaymentFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#contactless-payment-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M6.067 9.734a.5.5 0 1 1-.884-.468 2.67 2.67 0 0 0 0-2.532.5.5 0 0 1 .884-.468 3.71 3.71 0 0 1 0 3.468m1.75 1a.5.5 0 1 1-.883-.47 4.82 4.82 0 0 0 0-4.53.5.5 0 1 1 .883-.47 5.81 5.81 0 0 1 0 5.471zm1.75 1a.5.5 0 0 1-.88-.47 6.91 6.91 0 0 0 0-6.528.5.5 0 0 1 .883-.472 7.92 7.92 0 0 1-.003 7.472z" /></g><defs><clipPath id="contactless-payment-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgContactlessPaymentFill);
const Memo = memo(ForwardRef);
export default Memo;