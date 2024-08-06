import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFloppyDiskBackFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#floppy-disk-back-fill_svg__a)"><path fill="#000" d="M13 2H5.207a1 1 0 0 0-.707.293L2.293 4.5A1 1 0 0 0 2 5.207V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M10.75 5a.25.25 0 0 1-.25.25h-5A.25.25 0 0 1 5.25 5V3h5.5z" /></g><defs><clipPath id="floppy-disk-back-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFloppyDiskBackFill);
const Memo = memo(ForwardRef);
export default Memo;