import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCloudMoonFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cloud-moon-fill_svg__a)"><path fill="#000" d="M10.75 4.5q-.389 0-.772.062A4.5 4.5 0 0 0 6.51.614a.5.5 0 0 0-.6.599 3.503 3.503 0 0 1-4.198 4.198.5.5 0 0 0-.6.6 4.51 4.51 0 0 0 2.019 2.816A3.25 3.25 0 0 0 5.75 14h5a4.75 4.75 0 0 0 0-9.5m-8.414 2H2.5A4.505 4.505 0 0 0 7 2v-.167a3.48 3.48 0 0 1 2 3.003A4.78 4.78 0 0 0 6.313 7.55a3.23 3.23 0 0 0-2.437.55 3.5 3.5 0 0 1-1.54-1.6" /></g><defs><clipPath id="cloud-moon-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCloudMoonFill);
const Memo = memo(ForwardRef);
export default Memo;