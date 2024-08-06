import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyEthFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-eth-fill_svg__a)"><path fill="#000" d="m13.893 7.691-5.5-7a.5.5 0 0 0-.786 0l-5.5 7a.5.5 0 0 0 0 .618l5.5 7a.5.5 0 0 0 .786 0l5.5-7a.5.5 0 0 0 0-.618M8.5 9.724V2.445l4.214 5.363zm-1 0L3.286 7.808 7.5 2.445zm0 1.098v2.732l-3.34-4.25z" /></g><defs><clipPath id="currency-eth-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyEthFill);
const Memo = memo(ForwardRef);
export default Memo;