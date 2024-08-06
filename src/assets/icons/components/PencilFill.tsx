import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPencilFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pencil-fill_svg__a)"><path fill="#000" d="m14.207 4.586-2.793-2.794a1 1 0 0 0-1.414 0L2.293 9.5a1 1 0 0 0-.293.707V13a1 1 0 0 0 1 1h2.793a1 1 0 0 0 .707-.293L14.207 6a1 1 0 0 0 0-1.414M3.207 10l5.647-5.647 1.042 1.043-5.646 5.647zM3 11.207 4.793 13H3zm3 1.586L4.957 11.75l5.647-5.647 1.042 1.043z" /></g><defs><clipPath id="pencil-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPencilFill);
const Memo = memo(ForwardRef);
export default Memo;