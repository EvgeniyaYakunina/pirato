import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBarricadeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#barricade-fill_svg__a)"><path fill="#000" d="M14 4H2a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h1.5v2a.5.5 0 0 0 1 0v-2h7v2a.5.5 0 0 0 1 0v-2H14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M2 9.5V5.75L5.75 9.5zm12 0h-3.543L5.957 5h4.293L14 8.75z" /></g><defs><clipPath id="barricade-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBarricadeFill);
const Memo = memo(ForwardRef);
export default Memo;