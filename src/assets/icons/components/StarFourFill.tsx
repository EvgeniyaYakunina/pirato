import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStarFourFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#star-four-fill_svg__a)"><path fill="#000" d="M15 8a.99.99 0 0 1-.656.938l-3.965 1.441-1.441 3.965a1 1 0 0 1-1.875 0L5.62 10.379 1.656 8.938a1 1 0 0 1 0-1.875L5.621 5.62l1.442-3.965a1 1 0 0 1 1.875 0l1.441 3.965 3.965 1.442A.99.99 0 0 1 15 8" /></g><defs><clipPath id="star-four-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStarFourFill);
const Memo = memo(ForwardRef);
export default Memo;