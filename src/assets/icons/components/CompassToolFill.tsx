import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCompassToolFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#compass-tool-fill_svg__a)"><path fill="#000" d="M13.445 7.728a.5.5 0 1 0-.89-.455 4.97 4.97 0 0 1-2.067 2.093l-1.14-2.565A2.25 2.25 0 0 0 8.5 2.807V1.5a.5.5 0 1 0-1 0v1.307A2.25 2.25 0 0 0 6.652 6.8l-3.109 6.996a.5.5 0 1 0 .914.406l1.571-3.535c.634.22 1.3.333 1.972.332.672 0 1.339-.11 1.975-.326l1.568 3.53a.5.5 0 0 0 .914-.407l-1.563-3.516a6 6 0 0 0 2.551-2.554M8 10c-.53 0-1.058-.084-1.563-.25l1.13-2.543c.287.057.582.057.868 0l1.134 2.55A5.2 5.2 0 0 1 8 10" /></g><defs><clipPath id="compass-tool-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCompassToolFill);
const Memo = memo(ForwardRef);
export default Memo;