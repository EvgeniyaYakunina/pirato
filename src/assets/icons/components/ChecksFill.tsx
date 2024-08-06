import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChecksFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#checks-fill_svg__a)"><path fill="#000" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-9.5 7.5a.5.5 0 0 1-.354-.146l-1.5-1.5a.5.5 0 1 1 .708-.708L4.5 9.293l3.646-3.647a.5.5 0 1 1 .708.708l-4 4a.5.5 0 0 1-.354.146m8.854-4.146-4 4a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708L9 9.293l3.646-3.647a.501.501 0 0 1 .708.708" /></g><defs><clipPath id="checks-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgChecksFill);
const Memo = memo(ForwardRef);
export default Memo;