import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTaxiFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#taxi-fill_svg__a)"><path fill="#000" d="M15 6.5h-.71l-1.712-2.996A1 1 0 0 0 11.71 3h-1.371l-.75-1.871A1 1 0 0 0 8.66.5H7.34a1 1 0 0 0-.929.629L5.661 3H4.29a1 1 0 0 0-.868.504L1.71 6.5H1a.5.5 0 1 0 0 1h.5v5a1 1 0 0 0 1 1H4a1 1 0 0 0 1-1V12h6v.5a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-5h.5a.5.5 0 0 0 0-1m-10 3H3.5a.5.5 0 1 1 0-1H5a.5.5 0 1 1 0 1m7.5 0H11a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 0 1m-9.638-3L4.29 4h7.42l1.428 2.5z" /></g><defs><clipPath id="taxi-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTaxiFill);
const Memo = memo(ForwardRef);
export default Memo;