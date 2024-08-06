import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTwitterLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#twitter-logo-fill_svg__a)"><path fill="#000" d="m15.354 4.854-1.869 1.869C13.108 11.099 9.417 14.5 5 14.5c-.907 0-1.656-.144-2.224-.428-.458-.229-.645-.474-.692-.544a.5.5 0 0 1 .24-.746c.017-.006 1.515-.582 2.467-1.678a7 7 0 0 1-1.367-1.512c-.775-1.15-1.643-3.15-1.375-6.136a.5.5 0 0 1 .853-.308c.022.022 2.08 2.069 4.596 2.733V5.5a3 3 0 0 1 .898-2.144 2.93 2.93 0 0 1 2.11-.856A3.04 3.04 0 0 1 13.098 4H15a.5.5 0 0 1 .354.854" /></g><defs><clipPath id="twitter-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTwitterLogoFill);
const Memo = memo(ForwardRef);
export default Memo;