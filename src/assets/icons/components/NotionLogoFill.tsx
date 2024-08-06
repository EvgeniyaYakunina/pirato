import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotionLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#notion-logo-fill_svg__a)"><path fill="#000" d="M14 3a.5.5 0 0 1-.5.5h-1V13a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.437-.259L4.5 4.947V12.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1v-9h-1a.5.5 0 1 1 0-1h4a.5.5 0 0 1 .438.259l4.562 8.294V3.5h-1a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="notion-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgNotionLogoFill);
const Memo = memo(ForwardRef);
export default Memo;