import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgThumbsDownFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#thumbs-down-fill_svg__a)"><path fill="#000" d="m14.989 9.813-.75-6A1.5 1.5 0 0 0 12.75 2.5H2a1 1 0 0 0-1 1V9a1 1 0 0 0 1 1h2.691l2.362 4.724A.5.5 0 0 0 7.5 15a2.5 2.5 0 0 0 2.5-2.5v-1h3.5a1.5 1.5 0 0 0 1.489-1.687M4.5 9H2V3.5h2.5z" /></g><defs><clipPath id="thumbs-down-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgThumbsDownFill);
const Memo = memo(ForwardRef);
export default Memo;