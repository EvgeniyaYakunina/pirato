import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMessengerLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#messenger-logo-fill_svg__a)"><path fill="#000" d="M8 1.5a6.5 6.5 0 0 0-5.739 9.555l-.71 2.128a1 1 0 0 0 1.266 1.265l2.128-.71A6.5 6.5 0 1 0 8 1.5m3.354 5.854-2 2a.5.5 0 0 1-.708 0L7 7.707 5.354 9.354a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0L9 8.293l1.646-1.647a.5.5 0 0 1 .708.708" /></g><defs><clipPath id="messenger-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMessengerLogoFill);
const Memo = memo(ForwardRef);
export default Memo;