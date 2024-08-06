import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyInrFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-inr-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M10.395 6H11a.5.5 0 0 1 0 1h-.512A2.754 2.754 0 0 1 7.75 9.5h-.793l3.35 2.606a.502.502 0 0 1-.05.841.5.5 0 0 1-.564-.053l-4.5-3.5A.5.5 0 0 1 5.5 8.5h2.25A1.75 1.75 0 0 0 9.482 7H5.5a.5.5 0 0 1 0-1h3.83a1.75 1.75 0 0 0-1.58-1H5.5a.5.5 0 0 1 0-1H11a.5.5 0 0 1 0 1H9.87c.243.293.421.634.525 1" /></g><defs><clipPath id="currency-inr-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyInrFill);
const Memo = memo(ForwardRef);
export default Memo;