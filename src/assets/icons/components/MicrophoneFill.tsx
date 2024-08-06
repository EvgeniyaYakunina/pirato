import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMicrophoneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#microphone-fill_svg__a)"><path fill="#000" d="M5 8V4a3 3 0 1 1 6 0v4a3 3 0 0 1-6 0m8 0a.5.5 0 0 0-1 0 4 4 0 1 1-8 0 .5.5 0 1 0-1 0 5.007 5.007 0 0 0 4.5 4.975V15a.5.5 0 0 0 1 0v-2.025A5.006 5.006 0 0 0 13 8" /></g><defs><clipPath id="microphone-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMicrophoneFill);
const Memo = memo(ForwardRef);
export default Memo;