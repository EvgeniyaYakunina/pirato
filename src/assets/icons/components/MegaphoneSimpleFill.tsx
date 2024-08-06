import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMegaphoneSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#megaphone-simple-fill_svg__a)"><path fill="#000" d="M14.284 5.416 3.28 2.041A1 1 0 0 0 2 3v9a1 1 0 0 0 1.283.96L8.5 11.357V12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V10.13l1.784-.547a1.01 1.01 0 0 0 .716-.96v-2.25a1.005 1.005 0 0 0-.716-.958M11.5 12h-2v-.949l2-.614zM14 8.625h-.007L9.5 10.005v-5.01l4.493 1.38H14z" /></g><defs><clipPath id="megaphone-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMegaphoneSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;