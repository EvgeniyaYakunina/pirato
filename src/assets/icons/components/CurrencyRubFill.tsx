import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyRubFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-rub-fill_svg__a)"><path fill="#000" d="M10.5 6.5A1.5 1.5 0 0 1 9 8H7V5h2a1.5 1.5 0 0 1 1.5 1.5m4 1.5A6.5 6.5 0 1 1 8 1.5 6.507 6.507 0 0 1 14.5 8m-3-1.5A2.5 2.5 0 0 0 9 4H6.5a.5.5 0 0 0-.5.5V8h-.5a.5.5 0 0 0 0 1H6v1h-.5a.5.5 0 0 0 0 1H6v1a.5.5 0 0 0 1 0v-1h2.5a.5.5 0 0 0 0-1H7V9h2a2.5 2.5 0 0 0 2.5-2.5" /></g><defs><clipPath id="currency-rub-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyRubFill);
const Memo = memo(ForwardRef);
export default Memo;