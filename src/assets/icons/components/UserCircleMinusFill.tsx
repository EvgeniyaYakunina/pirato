import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserCircleMinusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-circle-minus-fill_svg__a)"><path fill="#000" d="M8 4.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M11 4h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1m2.492 1.529a.5.5 0 0 0-.305.638 5.5 5.5 0 0 1-1.076 5.484 5 5 0 0 0-1.361-1.332.25.25 0 0 0-.303.02 3.74 3.74 0 0 1-4.891 0 .25.25 0 0 0-.306-.02 5 5 0 0 0-1.362 1.332 5.5 5.5 0 0 1 5.03-9.075.5.5 0 0 0 .164-.986 6.494 6.494 0 1 0 5.048 4.243.5.5 0 0 0-.638-.304" /></g><defs><clipPath id="user-circle-minus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserCircleMinusFill);
const Memo = memo(ForwardRef);
export default Memo;