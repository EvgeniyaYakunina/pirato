import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNutFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#nut-fill_svg__a)"><path fill="#000" d="m13.98 4.134-5.5-3.009a.99.99 0 0 0-.96 0l-5.5 3.01a1 1 0 0 0-.52.876v5.977a1 1 0 0 0 .52.875l5.5 3.01a.99.99 0 0 0 .96 0l5.5-3.01a1 1 0 0 0 .52-.875V5.011a1 1 0 0 0-.52-.877M8 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5" /></g><defs><clipPath id="nut-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNutFill);
const Memo = memo(ForwardRef);
export default Memo;