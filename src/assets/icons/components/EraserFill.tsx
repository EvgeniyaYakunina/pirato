import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEraserFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#eraser-fill_svg__a)"><path fill="#000" d="m14.062 5.025-2.587-2.588a1.5 1.5 0 0 0-2.121 0L1.937 9.854a1.5 1.5 0 0 0 0 2.12l1.88 1.88A.5.5 0 0 0 4.17 14H13.5a.5.5 0 0 0 0-1H8.206l5.856-5.854a1.5 1.5 0 0 0 0-2.121m-.708 1.412L10 9.793 6.707 6.5l3.355-3.354a.5.5 0 0 1 .708 0l2.586 2.586a.5.5 0 0 1 0 .707z" /></g><defs><clipPath id="eraser-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEraserFill);
const Memo = memo(ForwardRef);
export default Memo;