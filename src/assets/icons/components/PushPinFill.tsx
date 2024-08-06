import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPushPinFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#push-pin-fill_svg__a)"><path fill="#000" d="m14.708 6.5-3.342 3.353c.285.792.404 2.118-.824 3.75a1 1 0 0 1-.73.397h-.07a1 1 0 0 1-.707-.293l-3.017-3.02-2.664 2.667a.5.5 0 0 1-.708-.708l2.667-2.664-3.02-3.019a1 1 0 0 1 .082-1.486c1.589-1.282 3.11-1.03 3.775-.821L9.5 1.294a1 1 0 0 1 1.415 0l3.793 3.792a1 1 0 0 1 0 1.414" /></g><defs><clipPath id="push-pin-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPushPinFill);
const Memo = memo(ForwardRef);
export default Memo;