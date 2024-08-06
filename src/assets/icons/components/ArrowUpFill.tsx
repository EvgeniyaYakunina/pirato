import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#arrow-up-fill_svg__a)"><path fill="#000" d="M12.962 7.191a.5.5 0 0 1-.462.309h-4v6a.5.5 0 0 1-1 0v-6h-4a.5.5 0 0 1-.354-.854l4.5-4.5a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1 .108.545" /></g><defs><clipPath id="arrow-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgArrowUpFill);
const Memo = memo(ForwardRef);
export default Memo;