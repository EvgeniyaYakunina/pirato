import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLetterCircleHFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#letter-circle-h-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.5 9a.5.5 0 0 1-1 0v-2h-3v2a.5.5 0 0 1-1 0v-5a.5.5 0 1 1 1 0v2h3v-2a.5.5 0 1 1 1 0z" /></g><defs><clipPath id="letter-circle-h-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLetterCircleHFill);
const Memo = memo(ForwardRef);
export default Memo;