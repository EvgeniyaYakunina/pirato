import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyKrwFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#currency-krw-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M12.5 9h-1.161l-.875 2.188a.5.5 0 0 1-.929 0L8 7.345l-1.536 3.842a.5.5 0 0 1-.928 0L4.66 9H3.5a.5.5 0 0 1 0-1h.761l-.725-1.812a.5.5 0 1 1 .928-.375L6 9.653l1.536-3.84a.5.5 0 0 1 .928 0L10 9.653l1.536-3.84a.501.501 0 0 1 .928.375L11.74 8h.761a.5.5 0 0 1 0 1" /></g><defs><clipPath id="currency-krw-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCurrencyKrwFill);
const Memo = memo(ForwardRef);
export default Memo;