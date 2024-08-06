import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlipVerticalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#flip-vertical-fill_svg__a)"><path fill="#000" d="M3.5 7.5h10a1 1 0 0 0 .39-1.921l-.01-.004-9.995-4A1 1 0 0 0 2.5 2.5v4a1 1 0 0 0 1 1m0-5 .01.004L13.5 6.5h-10zm10.98 6.801a.99.99 0 0 1-.591 1.12l-.009.004-9.996 4A1 1 0 0 1 2.5 13.5v-4a1 1 0 0 1 1-1h10a.99.99 0 0 1 .98.801" /></g><defs><clipPath id="flip-vertical-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFlipVerticalFill);
const Memo = memo(ForwardRef);
export default Memo;