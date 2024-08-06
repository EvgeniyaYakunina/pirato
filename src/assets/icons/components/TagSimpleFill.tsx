import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTagSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tag-simple-fill_svg__a)"><path fill="#000" d="m15.416 7.723-2.854-4.277a1 1 0 0 0-.83-.446H2.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.233a1 1 0 0 0 .83-.445l2.851-4.277a.5.5 0 0 0 .002-.556" /></g><defs><clipPath id="tag-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTagSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;