import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDropSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#drop-simple-fill_svg__a)"><path fill="#000" d="M10.875 2.984A16 16 0 0 0 8.285.59a.5.5 0 0 0-.574 0c-.948.7-1.816 1.503-2.586 2.394C3.407 4.957 2.5 7.037 2.5 9a5.5 5.5 0 1 0 11 0c0-1.963-.907-4.043-2.625-6.016" /></g><defs><clipPath id="drop-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDropSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;