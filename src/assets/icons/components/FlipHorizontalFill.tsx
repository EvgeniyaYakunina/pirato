import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlipHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flip-horizontal-fill_svg__a)"><path fill="#000" d="M7.5 2.5v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-.924-1.384l4-9.996.004-.009A1 1 0 0 1 7.5 2.5m6.833 10.552a1 1 0 0 1-.833.448h-4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1.921-.39l.004.01 4 9.995a1 1 0 0 1-.092.937M13.5 12.5l-.004-.01L9.5 2.5v10z" /></g><defs><clipPath id="flip-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlipHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;