import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMegaphoneFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#megaphone-fill_svg__a)"><path fill="#000" d="M12.5 4.5h-2.488c-.181-.01-3.35-.234-6.369-2.765A1 1 0 0 0 2 2.5v10a1 1 0 0 0 1.643.766c2.36-1.98 4.813-2.548 5.857-2.706v1.982a1 1 0 0 0 .445.833l.688.458a1 1 0 0 0 1.523-.583l.736-2.772A3 3 0 0 0 12.5 4.5m-1.312 8.493V13l-.688-.458V10.5h1.35zM12.5 9.5h-2v-4h2a2 2 0 0 1 0 4" /></g><defs><clipPath id="megaphone-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMegaphoneFill);
const Memo = memo(ForwardRef);
export default Memo;