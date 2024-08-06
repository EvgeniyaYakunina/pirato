import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAsteriskFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#asterisk-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m3.714 8.067a.5.5 0 1 1-.5.866L8.5 8.866V12a.5.5 0 0 1-1 0V8.866l-2.714 1.567a.5.5 0 0 1-.5-.866L7 8 4.286 6.433a.5.5 0 0 1 .5-.866L7.5 7.134V4a.5.5 0 1 1 1 0v3.134l2.714-1.567a.5.5 0 0 1 .5.866L9 8z" /></g><defs><clipPath id="asterisk-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAsteriskFill);
const Memo = memo(ForwardRef);
export default Memo;