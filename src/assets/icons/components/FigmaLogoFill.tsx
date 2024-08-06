import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFigmaLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#figma-logo-fill_svg__a)"><path fill="#000" d="M12 6a2.5 2.5 0 0 0-1.5-4.5H6A2.5 2.5 0 0 0 4.5 6a2.5 2.5 0 0 0 .086 4.063A2.75 2.75 0 1 0 9 12.25V10a2.5 2.5 0 0 0 3-4M8 9.5H6a1.5 1.5 0 0 1 0-3h2zm2.5-4H9v-3h1.5a1.5 1.5 0 0 1 0 3" /></g><defs><clipPath id="figma-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFigmaLogoFill);
const Memo = memo(ForwardRef);
export default Memo;