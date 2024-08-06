import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSirenFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#siren-fill_svg__a)"><path fill="#000" d="M7.5 1V.5a.5.5 0 0 1 1 0V1a.5.5 0 1 1-1 0m5 2a.5.5 0 0 0 .354-.146l.5-.5a.5.5 0 0 0-.708-.708l-.5.5A.5.5 0 0 0 12.5 3m-9.354-.146a.5.5 0 1 0 .708-.708l-.5-.5a.5.5 0 1 0-.708.708zM14.5 11v1.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1V8a5.5 5.5 0 0 1 5.542-5.5c3.01.022 5.458 2.518 5.458 5.563V10a1 1 0 0 1 1 1M8.418 5.493C9.604 5.693 10.5 6.77 10.5 8a.5.5 0 0 0 1 0c0-1.713-1.254-3.214-2.918-3.493a.5.5 0 1 0-.165.986M13.5 12.5V11h-11v1.5z" /></g><defs><clipPath id="siren-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSirenFill);
const Memo = memo(ForwardRef);
export default Memo;