import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#user-circle-fill_svg__a)"><path fill="#000" d="M10.75 7.5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0m3.75.5A6.5 6.5 0 1 1 8 1.5 6.507 6.507 0 0 1 14.5 8m-1 0a5.506 5.506 0 0 0-5.717-5.496C4.84 2.618 2.492 5.07 2.5 8.016a5.48 5.48 0 0 0 1.39 3.635c.364-.528.825-.98 1.36-1.332a.25.25 0 0 1 .302.02 3.74 3.74 0 0 0 4.892 0 .25.25 0 0 1 .302-.02 5 5 0 0 1 1.362 1.332A5.48 5.48 0 0 0 13.5 8" /></g><defs><clipPath id="user-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgUserCircleFill);
const Memo = memo(ForwardRef);
export default Memo;