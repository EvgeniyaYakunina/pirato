import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCopyrightFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#copyright-fill_svg__a)"><path fill="#000" d="M8 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M8 10a1.99 1.99 0 0 0 1.6-.8.5.5 0 1 1 .8.6 3 3 0 1 1 0-3.601.5.5 0 1 1-.8.6A2 2 0 1 0 8 10m0-8.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m0 12A5.5 5.5 0 1 1 13.5 8 5.506 5.506 0 0 1 8 13.5" /></g><defs><clipPath id="copyright-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCopyrightFill);
const Memo = memo(ForwardRef);
export default Memo;