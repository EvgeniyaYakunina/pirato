import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlayCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#play-circle-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m2.534 6.911-3.25 2.25a.501.501 0 0 1-.784-.411v-4.5a.5.5 0 0 1 .784-.411l3.25 2.25a.5.5 0 0 1 0 .822" /></g><defs><clipPath id="play-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPlayCircleFill);
const Memo = memo(ForwardRef);
export default Memo;