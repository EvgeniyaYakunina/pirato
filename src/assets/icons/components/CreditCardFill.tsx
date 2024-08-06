import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCreditCardFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#credit-card-fill_svg__a)"><path fill="#000" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-5.5 8h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1m4 0h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1M2 5.5V4h12v1.5z" /></g><defs><clipPath id="credit-card-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCreditCardFill);
const Memo = memo(ForwardRef);
export default Memo;