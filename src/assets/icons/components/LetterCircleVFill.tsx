import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLetterCircleVFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#letter-circle-v-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.464 4.688-2 5a.5.5 0 0 1-.928 0l-2-5a.5.5 0 1 1 .928-.375L8 9.653l1.536-3.84a.5.5 0 0 1 .928.375" /></g><defs><clipPath id="letter-circle-v-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLetterCircleVFill);
const Memo = memo(ForwardRef);
export default Memo;