import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHeadsetFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#headset-fill_svg__a)"><path fill="#000" d="M14.5 8v5a2.5 2.5 0 0 1-2.5 2.5H8.5a.5.5 0 0 1 0-1H12a1.5 1.5 0 0 0 1.5-1.5H12a1.5 1.5 0 0 1-1.5-1.5V9A1.5 1.5 0 0 1 12 7.5h1.478a5.5 5.5 0 0 0-9.353-3.404A5.46 5.46 0 0 0 2.523 7.5H4A1.5 1.5 0 0 1 5.5 9v2.5A1.5 1.5 0 0 1 4 13H3a1.5 1.5 0 0 1-1.5-1.5V8a6.507 6.507 0 0 1 11.118-4.584A6.46 6.46 0 0 1 14.5 8" /></g><defs><clipPath id="headset-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHeadsetFill);
const Memo = memo(ForwardRef);
export default Memo;