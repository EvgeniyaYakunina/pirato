import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStripeLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#stripe-logo-fill_svg__a)"><path fill="#000" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-5 9.5c-1.379 0-2.5-.897-2.5-2a.5.5 0 1 1 1 0c0 .542.688 1 1.5 1s1.5-.458 1.5-1c0-.592-.538-.812-1.68-1.141-.984-.284-2.209-.637-2.209-1.859 0-1.14 1.027-2 2.389-2 .982 0 1.824.456 2.195 1.188a.5.5 0 1 1-.892.45c-.2-.392-.7-.638-1.303-.638-.792 0-1.389.43-1.389 1 0 .438.563.631 1.486.898C9.11 7.688 10.5 8.09 10.5 9.5c0 1.103-1.121 2-2.5 2" /></g><defs><clipPath id="stripe-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStripeLogoFill);
const Memo = memo(ForwardRef);
export default Memo;