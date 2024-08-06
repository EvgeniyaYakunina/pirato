import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgQuotesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#quotes-fill_svg__a)"><path fill="#000" d="M7.25 4.5V10a3.003 3.003 0 0 1-3 3 .5.5 0 0 1 0-1 2 2 0 0 0 2-2v-.5H2.5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1m6.25-1H9.75a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3.75v.5a2 2 0 0 1-2 2 .5.5 0 0 0 0 1 3.003 3.003 0 0 0 3-3V4.5a1 1 0 0 0-1-1" /></g><defs><clipPath id="quotes-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgQuotesFill);
const Memo = memo(ForwardRef);
export default Memo;