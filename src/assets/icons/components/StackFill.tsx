import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStackFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g fill="#000" clipPath="url(#stack-fill_svg__a)"><path d="M13.75 10.568 8 13.921l-5.75-3.353a.5.5 0 0 0-.5.864l6 3.5a.5.5 0 0 0 .504 0l6-3.5a.5.5 0 1 0-.504-.864" /><path d="M13.75 7.568 8 10.921 2.25 7.568a.5.5 0 0 0-.5.864l6 3.5a.5.5 0 0 0 .504 0l6-3.5a.5.5 0 1 0-.504-.864" /><path d="m1.75 5.432 6 3.5a.5.5 0 0 0 .504 0l6-3.5a.5.5 0 0 0 0-.864l-6-3.5a.5.5 0 0 0-.504 0l-6 3.5a.5.5 0 0 0 0 .864" /></g><defs><clipPath id="stack-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgStackFill);
const Memo = memo(ForwardRef);
export default Memo;