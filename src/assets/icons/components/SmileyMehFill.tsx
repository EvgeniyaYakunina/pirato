import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSmileyMehFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#smiley-meh-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.51 6.51 0 0 0 8 1.5M5.75 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.75 4.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1m-.25-3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="smiley-meh-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSmileyMehFill);
const Memo = memo(ForwardRef);
export default Memo;