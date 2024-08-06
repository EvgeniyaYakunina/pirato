import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrademarkFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#trademark-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M6.5 7H6v2.5a.5.5 0 1 1-1 0V7h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1M12 9.5a.5.5 0 0 1-1 0V7.83l-.875 1a.5.5 0 0 1-.75 0l-.875-1V9.5a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .875-.33L9.75 7.74l1.375-1.57A.5.5 0 0 1 12 6.5z" /></g><defs><clipPath id="trademark-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTrademarkFill);
const Memo = memo(ForwardRef);
export default Memo;