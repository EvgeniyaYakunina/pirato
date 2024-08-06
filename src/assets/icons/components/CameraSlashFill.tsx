import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCameraSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#camera-slash-fill_svg__a)"><path fill="#000" d="M14.5 5v7q0 .147-.028.29a.25.25 0 0 1-.431.126L5.375 2.88a.25.25 0 0 1-.023-.307l.234-.35A.5.5 0 0 1 6 2h4a.5.5 0 0 1 .416.223l.851 1.277H13A1.5 1.5 0 0 1 14.5 5m-1.13 8.164a.499.499 0 0 1-.393.84.5.5 0 0 1-.347-.168l-.306-.336H3A1.5 1.5 0 0 1 1.5 12V5A1.5 1.5 0 0 1 3 3.5h.233l-.603-.664a.5.5 0 1 1 .74-.672zM9.25 10.12 6.258 6.828A2.25 2.25 0 0 0 9.25 10.12" /></g><defs><clipPath id="camera-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCameraSlashFill);
const Memo = memo(ForwardRef);
export default Memo;