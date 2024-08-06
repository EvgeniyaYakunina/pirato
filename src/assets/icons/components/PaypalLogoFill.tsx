import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaypalLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paypal-logo-fill_svg__a)"><path fill="#000" d="M13.757 5.846a3.5 3.5 0 0 0-1.261-1.011A3.5 3.5 0 0 0 9 1.5H5.25a1 1 0 0 0-.97.757l-2.25 9A1 1 0 0 0 3 12.5h1.719l-.188.758A1 1 0 0 0 5.5 14.5h1.969a1 1 0 0 0 .968-.758L9 11.5h2a3.5 3.5 0 0 0 2.759-5.654zM3 11.5l2.25-9H9a2.5 2.5 0 0 1 2.456 2.03A4 4 0 0 0 11 4.5H7.5a1 1 0 0 0-.97.758L4.97 11.5zm10.423-2.894A2.496 2.496 0 0 1 11 10.5H9a1 1 0 0 0-.97.758L7.467 13.5H5.5l1.25-5H9a3.49 3.49 0 0 0 3.375-2.587 2.51 2.51 0 0 1 1.049 2.693z" /></g><defs><clipPath id="paypal-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaypalLogoFill);
const Memo = memo(ForwardRef);
export default Memo;