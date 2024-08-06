import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotificationFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#notification-fill_svg__a)"><path fill="#000" d="M13.5 8v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h5a.5.5 0 1 1 0 1H3V13h9.5V8a.5.5 0 0 1 1 0m-1.25-6.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" /></g><defs><clipPath id="notification-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNotificationFill);
const Memo = memo(ForwardRef);
export default Memo;