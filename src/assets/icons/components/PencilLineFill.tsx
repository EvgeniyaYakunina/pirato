import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPencilLineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pencil-line-fill_svg__a)"><path fill="#000" d="m14.208 4.585-2.794-2.792a1 1 0 0 0-1.414 0L2.293 9.5a1 1 0 0 0-.293.707V13a1 1 0 0 0 1 1h10.5a.5.5 0 1 0 0-1H7.208l7-7a1 1 0 0 0 0-1.415m-9.25 7.165 5.646-5.646 1.043 1.042L6 12.793zm4.937-6.354L4.25 11.043 3.207 10l5.647-5.646zM3 11.206 4.793 13H3z" /></g><defs><clipPath id="pencil-line-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPencilLineFill);
const Memo = memo(ForwardRef);
export default Memo;