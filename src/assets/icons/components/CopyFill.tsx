import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCopyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#copy-fill_svg__a)"><path fill="#000" d="M13.5 2h-8a.5.5 0 0 0-.5.5V5H2.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5m-.5 8h-2V5.5a.5.5 0 0 0-.5-.5H6V3h7z" /></g><defs><clipPath id="copy-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCopyFill);
const Memo = memo(ForwardRef);
export default Memo;