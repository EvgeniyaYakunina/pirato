import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgThumbsUpFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#thumbs-up-fill_svg__a)"><path fill="#000" d="M14.625 5.008A1.5 1.5 0 0 0 13.5 4.5H10v-1A2.5 2.5 0 0 0 7.5 1a.5.5 0 0 0-.447.276L4.69 6H2a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1h10.75a1.5 1.5 0 0 0 1.489-1.312l.75-6a1.5 1.5 0 0 0-.364-1.18M2 7h2.5v5.5H2z" /></g><defs><clipPath id="thumbs-up-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgThumbsUpFill);
const Memo = memo(ForwardRef);
export default Memo;