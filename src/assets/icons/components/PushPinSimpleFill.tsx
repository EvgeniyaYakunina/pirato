import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPushPinSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#push-pin-simple-fill_svg__a)"><path fill="#000" d="M14 11a.5.5 0 0 1-.5.5h-5V15a.5.5 0 0 1-1 0v-3.5h-5a.5.5 0 0 1 0-1h.58L4.405 3H4a.5.5 0 1 1 0-1h8a.5.5 0 0 1 0 1h-.404l1.323 7.5h.581a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="push-pin-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPushPinSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;