import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNumberSixFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#number-six-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M8 12a2.75 2.75 0 0 1-2.394-4.101l.013-.024L7.71 4.25a.5.5 0 0 1 .867.5L7.545 6.538A2.75 2.75 0 1 1 8 12m1.75-2.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0" /></g><defs><clipPath id="number-six-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNumberSixFill);
const Memo = memo(ForwardRef);
export default Memo;