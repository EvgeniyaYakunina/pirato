import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgReceiptFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#receipt-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1V13a.5.5 0 0 0 .724.447L4 12.559l1.776.888a.5.5 0 0 0 .448 0L8 12.559l1.776.888a.5.5 0 0 0 .448 0L12 12.559l1.776.888A.5.5 0 0 0 14.5 13V3.5a1 1 0 0 0-1-1M11 9H5a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1m0-2H5a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1" /></g><defs><clipPath id="receipt-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgReceiptFill);
const Memo = memo(ForwardRef);
export default Memo;