import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgReceiptXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#receipt-x-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1V13a.5.5 0 0 0 .724.447L4 12.559l1.776.888a.5.5 0 0 0 .448 0L8 12.559l1.776.888a.5.5 0 0 0 .448 0L12 12.559l1.776.888A.5.5 0 0 0 14.5 13V3.5a1 1 0 0 0-1-1M9.854 8.646a.5.5 0 0 1-.708.708L8 8.207 6.854 9.354a.5.5 0 1 1-.708-.708L7.293 7.5 6.146 6.354a.5.5 0 1 1 .708-.708L8 6.793l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7.5z" /></g><defs><clipPath id="receipt-x-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgReceiptXFill);
const Memo = memo(ForwardRef);
export default Memo;