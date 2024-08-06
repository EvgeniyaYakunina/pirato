import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNavigationArrowFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#navigation-arrow-fill_svg__a)"><path fill="#000" d="M15.5 7.599a.985.985 0 0 1-.706.937l-.012.004-4.875 1.365-1.365 4.875-.004.012a.99.99 0 0 1-.937.706h-.02a.99.99 0 0 1-.941-.667L2.562 3.838l-.003-.01a1 1 0 0 1 1.27-1.272l.01.003 10.994 4.079a.99.99 0 0 1 .667.96" /></g><defs><clipPath id="navigation-arrow-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNavigationArrowFill);
const Memo = memo(ForwardRef);
export default Memo;