import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWechatLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#wechat-logo-fill_svg__a)"><path fill="#000" d="M14.504 11.673A5 5 0 0 0 10.6 4.537a5.001 5.001 0 1 0-9.103 4.136l-.455 1.544a1 1 0 0 0 1.242 1.242l1.545-.454c.495.24 1.027.395 1.574.459a5 5 0 0 0 6.77 2.54l1.545.455a1 1 0 0 0 1.242-1.242zM8.25 9.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5M5 9.5q0 .45.081.894a4 4 0 0 1-.968-.366.5.5 0 0 0-.375-.04L2 10.5l.51-1.735a.5.5 0 0 0-.039-.375A4.001 4.001 0 1 1 9.48 4.527 5.01 5.01 0 0 0 5 9.5m6.75 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5" /></g><defs><clipPath id="wechat-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgWechatLogoFill);
const Memo = memo(ForwardRef);
export default Memo;