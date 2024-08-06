import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLetterCirclePFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#letter-circle-p-fill_svg__a)"><path fill="#000" d="M9.75 7.25A1.25 1.25 0 0 1 8.5 8.5H7V6h1.5a1.25 1.25 0 0 1 1.25 1.25M14.5 8A6.5 6.5 0 1 1 8 1.5 6.507 6.507 0 0 1 14.5 8m-3.75-.75A2.25 2.25 0 0 0 8.5 5h-2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-1h1.5a2.25 2.25 0 0 0 2.25-2.25" /></g><defs><clipPath id="letter-circle-p-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLetterCirclePFill);
const Memo = memo(ForwardRef);
export default Memo;