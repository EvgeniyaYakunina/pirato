import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyNgnFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-ngn-fill_svg__a)"><path fill="#000" d="M8.972 8.5H10v1.438zM6 7.5h1.028L6 6.063zm8.5.5A6.5 6.5 0 1 1 8 1.5 6.507 6.507 0 0 1 14.5 8m-2 0a.5.5 0 0 0-.5-.5h-1v-3a.5.5 0 0 0-1 0v3H8.258L5.907 4.21A.5.5 0 0 0 5 4.5v3H4a.5.5 0 0 0 0 1h1v3a.5.5 0 0 0 1 0v-3h1.742l2.351 3.29A.5.5 0 0 0 11 11.5v-3h1a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="currency-ngn-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyNgnFill);
const Memo = memo(ForwardRef);
export default Memo;