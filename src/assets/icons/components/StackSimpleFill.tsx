import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStackSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#stack-simple-fill_svg__a)"><path d="m.75 6.938 7 4a.5.5 0 0 0 .496 0l7-4a.5.5 0 0 0 0-.87l-7-4a.5.5 0 0 0-.496 0l-7 4a.5.5 0 0 0 0 .87" /><path d="M14.75 8.566 8 12.424 1.25 8.566a.503.503 0 0 0-.5.871l7 4a.5.5 0 0 0 .496 0l7-4a.5.5 0 1 0-.496-.868z" /></g><defs><clipPath id="stack-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStackSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;