import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPaperclipHorizontalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#paperclip-horizontal-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.5 9h-6a1.5 1.5 0 1 1 0-3h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 0 0 1h6a1.5 1.5 0 0 0 0-3H6a.5.5 0 0 1 0-1h4.5a2.5 2.5 0 0 1 0 5" /></g><defs><clipPath id="paperclip-horizontal-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPaperclipHorizontalFill);
const Memo = memo(ForwardRef);
export default Memo;