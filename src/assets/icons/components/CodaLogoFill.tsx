import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCodaLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#coda-logo-fill_svg__a)"><path fill="#000" d="M8.5 8a2.5 2.5 0 0 0 2.5 2.5h.02c.49.019.875-.091 1.328-.382a.75.75 0 0 1 1.152.632V13a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2.25a.75.75 0 0 1-1.154.631A2.514 2.514 0 0 0 8.5 8" /></g><defs><clipPath id="coda-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCodaLogoFill);
const Memo = memo(ForwardRef);
export default Memo;