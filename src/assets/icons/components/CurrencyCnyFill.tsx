import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyCnyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-cny-fill_svg__a)"><path fill="#000" d="M8 1a6.5 6.5 0 1 0 6.5 6.5A6.507 6.507 0 0 0 8 1M5.5 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M12 10a.5.5 0 0 1-.5.5H10A1.5 1.5 0 0 1 8.5 9V7.5h-1a3.003 3.003 0 0 1-3 3 .5.5 0 0 1 0-1 2 2 0 0 0 2-2H5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1H9.5V9a.5.5 0 0 0 .5.5h1V9a.5.5 0 0 1 1 0z" /></g><defs><clipPath id="currency-cny-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyCnyFill);
const Memo = memo(ForwardRef);
export default Memo;