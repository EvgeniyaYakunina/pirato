import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCursorFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cursor-fill_svg__a)"><path fill="#000" d="m13.78 12.987-.793.794a.75.75 0 0 1-1.062 0l-3.536-3.536-1.202 3.135-.008.02a.99.99 0 0 1-.913.6h-.049a.99.99 0 0 1-.9-.688L2.05 3.307A.997.997 0 0 1 3.307 2.05l10.005 3.267a1 1 0 0 1 .089 1.862l-.021.008-3.135 1.205 3.536 3.535a.75.75 0 0 1 0 1.06" /></g><defs><clipPath id="cursor-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCursorFill);
const Memo = memo(ForwardRef);
export default Memo;