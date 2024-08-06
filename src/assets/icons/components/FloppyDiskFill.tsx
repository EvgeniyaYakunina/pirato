import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFloppyDiskFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#floppy-disk-fill_svg__a)"><path fill="#000" d="M13.707 4.5 11.5 2.293A1 1 0 0 0 10.793 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.207a1 1 0 0 0-.293-.707M13 13h-1.5V9.5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1V13H3V3h7.793L13 5.207zm-3-8.5a.5.5 0 0 1-.5.5H6a.5.5 0 1 1 0-1h3.5a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="floppy-disk-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFloppyDiskFill);
const Memo = memo(ForwardRef);
export default Memo;