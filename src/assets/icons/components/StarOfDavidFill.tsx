import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStarOfDavidFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#star-of-david-fill_svg__a)"><path fill="#000" d="m12.576 8 1.861-3.25A.5.5 0 0 0 14 4h-3.71L8.438.75a.5.5 0 0 0-.868 0L5.708 4H2a.5.5 0 0 0-.434.75L3.423 8l-1.857 3.25a.5.5 0 0 0 .437.75h3.705l1.858 3.25a.5.5 0 0 0 .868 0L10.291 12H14a.5.5 0 0 0 .437-.75zm-1.152 0-1.713 3H6.289L4.575 8l1.714-3H9.71z" /></g><defs><clipPath id="star-of-david-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStarOfDavidFill);
const Memo = memo(ForwardRef);
export default Memo;